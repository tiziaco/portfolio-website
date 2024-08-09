# gunicorn_config.py

import os

bind = "0.0.0.0:8000"
module = "aurigaone.wsgi:application"

workers = 1
worker_connections = 1000
threads = 1

# Load domain name from environment variables
domain_name = os.getenv("DOMAIN_NAME")
print("*** domain_name ***")
print(domain_name)
certfile = f"/etc/letsencrypt/live/{domain_name}/fullchain.pem"
keyfile = f"/etc/letsencrypt/live/{domain_name}/privkey.pem"
