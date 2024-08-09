FROM nginx:1.27.0-alpine

# Copy the template config file and the start script
RUN echo "** TEST **"
RUN pwd

COPY ./conf.d/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY ./start-nginx.sh /start-nginx.sh

# Make the script executable
RUN chmod +x /start-nginx.sh

# Use the script as the entrypoint
ENTRYPOINT ["/start-nginx.sh"]
