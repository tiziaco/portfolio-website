#!/bin/sh

# Waits for nginx to be available, then gets the first certificate.

set -e

until nc -z nginx 80; do
    echo "Waiting for nginx proxy..."
    sleep 5s & wait ${!}
done

echo "Getting certificate..."

certbot certonly \
    --webroot \
    --webroot-path "/vol/www/" \
    -d "$DOMAIN_NAME" \
    -d "www.$DOMAIN_NAME" \
    --email $SMTP_EMAIL_USER \
    --rsa-key-size 4096 \
    --agree-tos \
    --noninteractive
