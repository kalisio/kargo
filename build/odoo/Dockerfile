FROM bitnami/odoo:18.0.20241105-debian-12-r0
LABEL maintainer "contact@kalisio.com"

# Custom steps to embed auth_oidc module
# https://odoo-community.org/shop/authentication-openid-connect-6545

# Dependency for auth_oidc module
RUN /opt/bitnami/odoo/venv/bin/pip install python-jose
