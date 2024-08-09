# Generated by Django 5.0.6 on 2024-08-05 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_alter_user_about'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='github',
            field=models.URLField(blank=True, max_length=128),
        ),
        migrations.AddField(
            model_name='user',
            name='linkedin',
            field=models.URLField(blank=True, max_length=128),
        ),
    ]
