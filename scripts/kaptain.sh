#!/usr/bin/env bash
set -euo pipefail
# set -x

# the script expects KUBECONFIG to be set

# helm plugin install https://github.com/databus23/helm-diff

# the action to perform install|uninstall|template|diff
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

THIS_FILE=$(readlink -f "$BASH_SOURCE")
THIS_PATH=$(dirname "$THIS_FILE")
ROOT_PATH=$(dirname "$THIS_PATH")
TMP_PATH=${XDG_RUNTIME_DIR:-$(dirname $(mktemp -u))}/kaptain
if [ -d "$ROOT_PATH/namespaces/$NAMESPACE" ]; then
    INFRA_PATH=$ROOT_PATH/namespaces/$NAMESPACE
else
    INFRA_PATH=$ROOT_PATH
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
    merge_config "$ROOT_PATH/configs/$APP" "$INFRA_PATH/configs/$APP" "$CONF_PATH"
}

embed_subconfig() {
    local APP=$1
    local SUB=$2
    local CONF_PATH=$INFRA_PATH/provision-configs/.kaptain/$APP.$SUB

    echo "kaptain: embedding $APP.$SUB config ..."
    merge_config "$ROOT_PATH/configs/$APP/$SUB" "$INFRA_PATH/configs/$APP/$SUB" "$CONF_PATH"
}

rclone_config() {
    local APP=$1
    local CONF_PATH=$TMP_PATH/$NAMESPACE/$APP
    local LOCAL_CONF=$CONF_PATH-config.tar.gz
    local REMOTE_CONF="kaptain:$NAMESPACE/$APP-config.tar.gz"

    echo "kaptain: pushing $APP config to $REMOTE_CONF ..."
    merge_config "$ROOT_PATH/configs/$APP" "$INFRA_PATH/configs/$APP" "$CONF_PATH"

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

    echo "kaptain: checking prerequisites ..."
    set +e

    OUTPUT=$(sed --version)
    printf "kaptain: checking sed ... "
    if [ $? -ne 0 ]; then printf "nok\n"; exit 1; else printf "ok\n"; fi
    OUTPUT=$(tar --version)
    printf "kaptain: checking tar ... "
    if [ $? -ne 0 ]; then printf "nok\n"; exit 1; else printf "ok\n"; fi
    OUTPUT=$(git --version)
    printf "kaptain: checking git ... "
    if [ $? -ne 0 ]; then printf "nok\n"; exit 1; else printf "ok\n"; fi
    OUTPUT=$(rclone --version)
    printf "kaptain: checking rclone ... "
    if [ $? -ne 0 ]; then printf "nok\n"; exit 1; else printf "ok\n"; fi
    OUTPUT=$(helmfile --version)
    printf "kaptain: checking helmfile ... "
    if [ $? -ne 0 ]; then printf "nok\n"; exit 1; else printf "ok\n"; fi

    printf "kaptain: checking KUBECONFIG ..."
    if [ -z "$KUBECONFIG" ]; then printf "nok\n"; exit 1; else printf "ok\n"; fi

    set -e
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

# Common environment variables used in helmfile
export KAPTAIN_ROOT_PATH=$ROOT_PATH
export KAPTAIN_REVISION=$(git -C $KAPTAIN_ROOT_PATH describe --tags --always --dirty=+)
export KAPTAIN_BRANCH=$(git -C $KAPTAIN_ROOT_PATH rev-parse --abbrev-ref HEAD)
export KARGO_ROOT_PATH="$ROOT_PATH/../kargo"
export KARGO_REVISION=$(git -C $KARGO_ROOT_PATH describe --tags --always --dirty=+)
export KARGO_BRANCH=$(git -C $KARGO_ROOT_PATH rev-parse --abbrev-ref HEAD)

cd $INFRA_PATH

# exec hooks
if [ -f "$INFRA_PATH/hooks.sh" ]; then
    source "$INFRA_PATH/hooks.sh" "pre-$ACTION"
fi

if [ "$ACTION" = "install" -o "$ACTION" = "provision" -o "$ACTION" = "config" ]; then
    # provision configs in both cases
    source "$INFRA_PATH/hooks.sh" "make-config"
    if [ -f "$INFRA_PATH/rclone.conf" ]; then
        rclone copy "$INFRA_PATH/rclone.conf" "$INFRA_PATH/provision-configs/.kaptain"
    fi
    echo "kaptain: installing provision-configs ..."
    helmfile --selector chart=provision-configs sync
    rm -fR "$INFRA_PATH/provision-configs/.kaptain"
fi

echo "kaptain: executing $ACTION action ..."
if [ "$ACTION" = install ]; then
    helmfile --selector action=install $HELMFILE_CONCURRENCY_OPT sync
elif [ "$ACTION" = uninstall ]; then
    helmfile --selector action=install destroy
elif [ "$ACTION" = provision ]; then
    helmfile --selector action=provision sync
elif [ "$ACTION" = unprovision ]; then
    helmfile --selector action=provision destroy
elif [ "$ACTION" = diff ]; then
    helmfile --selector chart=provision-configs diff
    helmfile --selector action=install diff
fi

# exec hooks
if [ -f "$INFRA_PATH/hooks.sh" ]; then
    source "$INFRA_PATH/hooks.sh" "post-$ACTION"
fi
