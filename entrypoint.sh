#!/bin/sh

# Run database migrations
python manage.py migrate --no-input

# Collect static files (already done in Dockerfile for production)
if [ "$DJANGO_DEBUG" = "False" ]; then
    python manage.py collectstatic --no-input
fi

# Create superuser if not exists
if [ "$DJANGO_SUPERUSER_NAME" ] && [ "$DJANGO_SUPERUSER_PASSWORD" ] && [ "$DJANGO_SUPERUSER_EMAIL" ]; then
    DJANGO_SUPERUSER_PASSWORD=$DJANGO_SUPERUSER_PASSWORD python manage.py createsuperuser --username $DJANGO_SUPERUSER_NAME --email $DJANGO_SUPERUSER_EMAIL --noinput || true
fi

# Start Gunicorn server
# exec "$@"
gunicorn portfolio.wsgi:application --bind 0.0.0.0:8000
