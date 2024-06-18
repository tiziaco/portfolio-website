from django.urls import path
from . import views

urlpatterns = [
	path("", views.home, name='home'),
	path("home/", views.home, name='home'),
	path('project/<slug:project_slug>/', views.project, name='project_detail')
]