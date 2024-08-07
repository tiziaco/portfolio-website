# Generated by Django 5.0.6 on 2024-06-18 20:58

from django.db import migrations, models
from django.utils.text import slugify

def populate_slugs(apps, schema_editor):
    Project = apps.get_model('main', 'Project')
    for project in Project.objects.all():
        if not project.slug:
            project.slug = slugify(project.title)
            project.save()

def populate_stack_defaults(apps, schema_editor):
    Stack = apps.get_model('main', 'Stack')
    default_stacks = ['Python', 'C', 'C++', 'JavaScript', 'HTML', 'CSS', 'SQL', 
                      'Bootstrap','Django', 'Flask', 'LlamaIndex']

    for stack_name in default_stacks:
        Stack.objects.create(name=stack_name)

class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='slug',
            field=models.SlugField(blank=True, null=True, unique=True),
        ),
        migrations.RunPython(populate_slugs),
        migrations.RunPython(populate_stack_defaults),
    ]
