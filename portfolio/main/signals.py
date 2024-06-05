# yourapp/signals.py

from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import ProjectImage

@receiver(post_save, sender=ProjectImage)
def set_project_card_img(sender, instance, created, **kwargs):
	if created and instance.project.card_img is None:
		instance.project.card_img = instance
		instance.project.save()
