#!/usr/bin/env bash
set -euo pipefail
# set -x

# the script expects KUBECONFIG to be set
# the script uses the current working directory

# helm plugin install https://github.com/databus23/helm-diff

# the action to perform (see check_args)
ACTION=${1}
# the namespace we're working with
# if namespaces/${NAMESPACE} folder does not exists, it'll search
# for stacks in the root folder
NAMESPACE=${2}
# if provided we'll only consider this stack
# ONLY_STACK=${3:-}

# default helmfile concurrency is 4, may be overriden with KAPTAIN_HELMFILE_CONCURRENCY
HELMFILE_CONCURRENCY_VALUE=${KAPTAIN_HELMFILE_CONCURRENCY:-4}
HELMFILE_CONCURRENCY_OPT=""
if [ ${HELMFILE_CONCURRENCY_VALUE} -ne 0 ]; then
    HELMFILE_CONCURRENCY_OPT="--concurrency ${HELMFILE_CONCURRENCY_VALUE}"
fi

WORK_PATH=$(pwd)
TMP_PATH=$(mktemp -d -p "${XDG_RUNTIME_DIR:-}" kaptain.XXXXXX)
if [ -d "$WORK_PATH/namespaces/$NAMESPACE" ]; then
    INFRA_PATH=$WORK_PATH/namespaces/$NAMESPACE
else
    INFRA_PATH=$WORK_PATH
fi

# utility functions available in hooks
merge_config() {
    local COMMON_CONF_PATH=$1
    local LOCAL_CONF_PATH=$2
    local FINAL_CONF_PATH=$3

    mkdir -p "$FINAL_CONF_PATH"
    cd "$FINAL_CONF_PATH"

    if [ -d "$COMMON_CONF_PATH" ]; then
        rclone copy "$COMMON_CONF_PATH"/ . --exclude "values.yaml*"
    fi
    if [ -d "$LOCAL_CONF_PATH" ]; then
        rclone copy "$LOCAL_CONF_PATH"/ . --exclude "values.yaml*"
    fi

    cd ~-
}

embed_config() {
    local APP=$1
    local CONF_PATH=$INFRA_PATH/provision-configs/.kaptain/$APP

    echo "kaptain: embedding $APP config ..."
    merge_config "$WORK_PATH/configs/$APP" "$INFRA_PATH/configs/$APP" "$CONF_PATH"
}

embed_subconfig() {
    local APP=$1
    local SUB=$2
    local CONF_PATH=$INFRA_PATH/provision-configs/.kaptain/$APP.$SUB

    echo "kaptain: embedding $APP.$SUB config ..."
    merge_config "$WORK_PATH/configs/$APP/$SUB" "$INFRA_PATH/configs/$APP/$SUB" "$CONF_PATH"
}

rclone_config() {
    local APP=$1
    local CONF_PATH=$TMP_PATH/$NAMESPACE/$APP
    local LOCAL_CONF=$CONF_PATH-config.tar.gz
    local REMOTE_CONF="kaptain:$NAMESPACE/$APP-config.tar.gz"

    echo "kaptain: pushing $APP config to $REMOTE_CONF ..."
    merge_config "$WORK_PATH/configs/$APP" "$INFRA_PATH/configs/$APP" "$CONF_PATH"

    cd "$CONF_PATH"
    # cf. https://reproducible-builds.org/docs/archives/
    tar --sort=name \
        --mtime="2017-09-15 00:00Z" \
        --owner=0 --group=0 --numeric-owner \
        --pax-option=exthdr.name=%d/PaxHeaders/%f,delete=atime,delete=ctime \
        -czf "$LOCAL_CONF" .
    rclone copyto "$LOCAL_CONF" "$REMOTE_CONF"  --progress --config "$INFRA_PATH/rclone.conf"
    cd ~-
}

split_multi_yml() {
    local YML_FILE=$1
    local WORK_PATH=$2

    local IFS=''
    while read LINE; do
        if [ "$LINE" == "---" ]; then
            read LINE
            OUT_FILE=$(echo $LINE | sed -r 's/^# Source: (.*)$/\1/')
            mkdir -p $(dirname $WORK_PATH/$OUT_FILE)
            echo -n > $WORK_PATH/$OUT_FILE
        else
            echo "$LINE" >> $WORK_PATH/$OUT_FILE
        fi
    done < $YML_FILE
}

check_prerequisites() {
    # Make sure we have all the tools we need
    # sed, tar, rclone, helmfile, git

    set +eu

    OUTPUT=$(sed --version)
    RETCODE=$?
    if [ $RETCODE -ne 0 ]; then printf "kaptain: missing sed\n"; exit 1; fi
    OUTPUT=$(tar --version)
    RETCODE=$?
    if [ $RETCODE -ne 0 ]; then printf "kaptain: missing tar\n"; exit 1; fi
    OUTPUT=$(git --version)
    RETCODE=$?
    if [ $RETCODE -ne 0 ]; then printf "kaptain: missing git\n"; exit 1; fi
    OUTPUT=$(rclone --version)
    RETCODE=$?
    if [ $RETCODE -ne 0 ]; then printf "kaptain: missing rclone\n"; exit 1; fi
    OUTPUT=$(helmfile --version)
    RETCODE=$?
    if [ $RETCODE -ne 0 ]; then printf "kaptain: missing helmfile\n"; exit 1; fi

    if [ -z "$KUBECONFIG" ]; then printf "kaptain: KUBECONFIG is not defined\n"; exit 1; fi

    set -eu
}

check_args() {
    case "$ACTION" in
        "install") ;;
        "uninstall") ;;
        "provision") ;;
        "unprovision") ;;
        "config") ;;
        "diff") ;;
        *)
            echo "kaptain: unknown action '$ACTION', stopping now."
            exit 1;;
    esac

    if [ ! -d "$INFRA_PATH" ]; then
        echo "kaptain: unknown namespace '$NAMESPACE', stopping now"
        exit 1
    fi
}

check_prerequisites
check_args

cd $INFRA_PATH

# These are exported for use in helmfiles or hooks ...
export KAPTAIN_NAMESPACE=$NAMESPACE
export KAPTAIN_NAMESPACE_DIRECTORY=$INFRA_PATH
export KAPTAIN_WORKING_DIRECTORY=$WORK_PATH

# exec hooks
if [ -f "$INFRA_PATH/hooks.sh" ]; then
    source "$INFRA_PATH/hooks.sh" "pre-$ACTION"

    if [ "$ACTION" = "install" -o "$ACTION" = "provision" -o "$ACTION" = "config" ]; then
        source "$INFRA_PATH/hooks.sh" "make-config"
        if [ -f "$INFRA_PATH/rclone.conf" ]; then
            rclone copy "$INFRA_PATH/rclone.conf" "$INFRA_PATH/provision-configs/.kaptain"
        fi
    fi
fi

echo "kaptain: executing $ACTION action ..."
if [ "$ACTION" = install ]; then
    helmfile --selector action=config --selector action=install $HELMFILE_CONCURRENCY_OPT sync
elif [ "$ACTION" = uninstall ]; then
    helmfile --selector action=install destroy
elif [ "$ACTION" = provision ]; then
    helmfile --selector action=config --selector action=provision $HELMFILE_CONCURRENCY_OPT sync
elif [ "$ACTION" = unprovision ]; then
    helmfile --selector action=provision destroy
elif [ "$ACTION" = config ]; then
    helmfile --selector action=config $HELMFILE_CONCURRENCY_OPT sync
elif [ "$ACTION" = diff ]; then
    helmfile --selector action=config --selector action=install diff
fi

# exec hooks
if [ -f "$INFRA_PATH/hooks.sh" ]; then
    source "$INFRA_PATH/hooks.sh" "post-$ACTION"

    if [ "$ACTION" = "install" -o "$ACTION" = "provision" -o "$ACTION" = "config" ]; then
        rm -fR "$INFRA_PATH/provision-configs/.kaptain"
    fi
fi

rm -fR $TMP_PATH
