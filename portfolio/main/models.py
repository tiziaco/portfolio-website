from django.db import models
from django.utils.text import slugify
from django.conf import settings

class Tag(models.Model):
	name = models.CharField(max_length=50, unique=True)

	def __str__(self):
		return self.name

class Stack(models.Model):
	name = models.CharField(max_length=50, unique=True)

	def __str__(self):
		return self.name

class Project(models.Model):
	user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True,related_name='projects')
	title = models.CharField(max_length=200)
	card_img = models.OneToOneField('ProjectImage', on_delete=models.SET_NULL, blank=True, null=True, related_name='card_project')
	description = models.TextField()
	content = models.TextField(default="", blank=True, null=True)
	tags = models.ManyToManyField(Tag, related_name='projects')
	stack = models.ManyToManyField(Stack, related_name='projects', blank=True)
	link = models.URLField(max_length=200, blank=True)
	slug = models.SlugField(unique=True, blank=True, null=True)

	def __str__(self):
		return self.title
	
	def save(self, *args, **kwargs):
		if not self.pk:  # If the object is new, it won't have a primary key (pk) yet
			self.slug = slugify(self.title)
		else:
			orig = Project.objects.get(pk=self.pk)
			if orig.title != self.title:  # If the title has changed
				self.slug = slugify(self.title)
		super(Project, self).save(*args, **kwargs)


class ProjectImage(models.Model):
	project = models.ForeignKey(Project, related_name='images', on_delete=models.CASCADE)
	image = models.ImageField(upload_to='project_images/')

	def __str__(self):
		return f'{self.project.title} Image'