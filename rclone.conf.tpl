[s3-host]
type = s3
provider = Scaleway
env_auth = false
endpoint = s3.fr-par.scw.cloud
access_key_id = ${S3_ACCESS_KEY}
secret_access_key = ${S3_SECRET_ACCESS_KEY}
region = fr-par
location_constraint = fr-par
acl = public-read
