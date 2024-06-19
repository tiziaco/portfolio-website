$(document).ready(function() {
	$('#contactForm').on('submit', function(event) {
		event.preventDefault(); // Prevent the default form submission

		const formData = $(this).serialize(); // Serialize the form data
		const csrfToken = $('[name=csrfmiddlewaretoken]').val();

		$.ajax({
			url: "contact/",
			type: 'POST',
			data: formData,
			headers: {
				'X-CSRFToken': csrfToken
			},
			success: function(data) {
				let responseMessage = $('#responseMessage');
				if (data.message) {
					responseMessage.html('<div class="alert alert-success">' + data.message + '</div>');
				} else {
					responseMessage.html('<div class="alert alert-danger">' + data.error + '</div>');
				}
			},
			error: function(xhr, status, error) {
				console.error('Error:', error);
			}
		});
	});
});
