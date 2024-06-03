from django.shortcuts import render, get_object_or_404
from .models import Project, Tag

def home(request):
	projects = Project.objects.all()
	tags = Tag.objects.all()
	return render(request, 'home.html', {"projects": projects, "tags": tags})

def project(request, id):
	return render(request, 'project.html')