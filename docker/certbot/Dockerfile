FROM certbot/certbot:v2.11.0

COPY certify-init.sh /opt/
RUN chmod +x /opt/certify-init.sh

ENTRYPOINT ["/opt/certify-init.sh"]
# CMD ["certbot", "renew"]
