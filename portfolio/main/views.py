from django.shortcuts import render, get_object_or_404
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Project, Tag, Stack
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist

def home(request):
	projects = Project.objects.all()
	tags = Tag.objects.all()
	stacks = Stack.objects.all()

	# Get the custom user model
	User = get_user_model()

	# Fetch the superuser
	try:
		superuser = User.objects.filter(is_superuser=True).first()
		if superuser:
			user_about = superuser.about
		else:
			user_about = "Default about text or empty string"
	except ObjectDoesNotExist:
		user_about = "Please create new superuser in admin section."
	
	return render(request, 'home.html', 
				{"projects": projects, 
				"tags": tags,
				"user": superuser,
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