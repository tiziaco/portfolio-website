FROM nginx:1.27.0-alpine


COPY ./conf.d/* /etc/nginx/
COPY ./start-nginx.sh /start-nginx.sh

USER root

RUN apk add --no-cache openssl bash
RUN chmod +x /start-nginx.sh

# Use the script as the entrypoint
ENTRYPOINT ["/start-nginx.sh"]
