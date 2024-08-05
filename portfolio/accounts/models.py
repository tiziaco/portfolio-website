from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    about = models.TextField(max_length=1000, blank=True)
    linkedin = models.URLField(max_length=128, blank=True)
    github = models.URLField(max_length=128, blank=True)
    about_picture = models.ImageField(upload_to='about_picture/', blank=True, null=True)