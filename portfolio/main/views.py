from django.shortcuts import render, get_object_or_404
from .models import Project, Tag

def home(request):
	projects = Project.objects.all()
	tags = Tag.objects.all()
	user_about = request.user.about if request.user is not None else "Default about text or empty string"
	return render(request, 'home.html', 
			   {"projects": projects, 
	   			"tags": tags,
				"user_about": user_about})

def project(request, project_title):
    project = get_object_or_404(Project, title=project_title)
    return render(request, 'project.html', {'project': project})