from django import template
from django.utils.html import format_html

register = template.Library()

@register.filter
def admin_thumbnail(instance):
    if instance and instance.card_img and instance.card_img.image:
        return format_html('<img src="{}" style="max-height: 100px; max-width: 100px;" />', instance.card_img.image.url)
    else:
        return ""