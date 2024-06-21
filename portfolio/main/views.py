from django.shortcuts import render, get_object_or_404
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Project, Tag, Stack

def home(request):
	projects = Project.objects.all()
	tags = Tag.objects.all()
	stacks = Stack.objects.all()
	user_about = request.user.about if request.user is not None else "Default about text or empty string"
	return render(request, 'home.html', 
				{"projects": projects, 
				"tags": tags,
				"user_about": user_about,
				"stacks": stacks})

def project(request, project_slug):
	project = get_object_or_404(Project, slug=project_slug)
	return render(request, 'project.html', {'project': project})

@csrf_exempt
def contact(request):
	if request.method == 'POST':
		name = request.POST['name']
		email = request.POST['email']
		message = request.POST['message']
		my_mail = request.user.email
		print("*** TEST ***")
		print(my_mail)
		print(email)

		# Construct the email content
		subject = f"New contact form submission from {name}"
		message_body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

		# Send the email
		send_mail(
			subject,
			message_body,
			email,  # Replace with your "from" email address
			[my_mail],  # Replace with the recipient's email address
		)

		# Return a JSON response with status 200
		return JsonResponse({'message': 'Email sent successfully'}, status=200)
	return JsonResponse({'error': 'Invalid request'}, status=400)