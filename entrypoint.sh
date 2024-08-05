#!/bin/sh

# Activate Poetry virtual environment
. $(poetry env info --path)/bin/activate

# Run database migrations
echo "\n*** Make database migrations..."
python manage.py migrate --no-input

# Collect static files
echo "\n*** Collect static files..."
python manage.py collectstatic --no-input


# Create superuser if not exists
if [ "$DJANGO_SUPERUSER_NAME" ] && [ "$DJANGO_SUPERUSER_PASSWORD" ] && [ "$DJANGO_SUPERUSER_EMAIL" ]; then
    echo "\n*** Creating superuser..."
    echo "super user: $DJANGO_SUPERUSER_NAME"
    # Ensure that the superuser creation command is correctly using environment variables
    python manage.py createsuperuser --username "$DJANGO_SUPERUSER_NAME" --email "$DJANGO_SUPERUSER_EMAIL" --noinput || true
fi

# Start Django server
if [ "$DJANGO_DEBUG" = "True" ]; then
    echo "\n*** Running server in Development mode..."
    exec python manage.py runserver 0.0.0.0:8000
else
    # Start Gunicorn server for production
    echo "\n*** Running server in Deploy mode..."
    gunicorn portfolio.wsgi:application --bind 0.0.0.0:8000
    # exec "$@"
fi
