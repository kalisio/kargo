[ovh]
type = swift
env_auth = false
auth_version = 3
auth = https://auth.cloud.ovh.net/v3
endpoint_type = public
tenant_domain = default
tenant = ${SWIFT_TENANT}
domain = default
user = ${SWIFT_USER}
key = ${SWIFT_KEY}
region = GRA

[charts]
type = alias
remote = ovh:charts
