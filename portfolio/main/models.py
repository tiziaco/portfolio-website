from django.db import models

# Create your models here.
class Tag(models.Model):
	name = models.CharField(max_length=50, unique=True)

	def __str__(self):
		return self.name

class Stack(models.Model):
	name = models.CharField(max_length=50, unique=True)

	def __str__(self):
		return self.name

class Project(models.Model):
	title = models.CharField(max_length=200)
	card_img = models.OneToOneField('ProjectImage', on_delete=models.SET_NULL, blank=True, null=True, related_name='card_project')
	description = models.TextField()
	content = models.TextField(default="", blank=True, null=True)
	tags = models.ManyToManyField(Tag, related_name='projects')
	stack = models.ManyToManyField(Stack, related_name='projects', blank=True)
	link = models.URLField(max_length=200, blank=True)

	def __str__(self):
		return self.title

class ProjectImage(models.Model):
	project = models.ForeignKey(Project, related_name='images', on_delete=models.CASCADE)
	image = models.ImageField(upload_to='project_images/')

	def __str__(self):
		return f'{self.project.title} Image'