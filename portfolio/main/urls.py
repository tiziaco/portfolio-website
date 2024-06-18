from django.urls import path
from . import views

urlpatterns = [
	path("", views.home, name='home'),
	path("home/", views.home, name='home'),
	path('project/<str:project_title>/', views.project, name='project_detail')
]