'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation Schema
const ContactFormSchema = z.object({
	fullname: z.string().min(2, { message: "Name must be at least 2 characters" }),
	email: z.string().email({ message: "Invalid email address" }),
	message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

// Email Transport Configuration
function createEmailTransporter() {
	return nodemailer.createTransport({
		service: 'gmail',
		host: process.env.SMTP_EMAIL_HOST,
		port: 587,
		secure: false, // Changed to false for port 587
		auth: {
		user: process.env.SMTP_EMAIL_USER,
		pass: process.env.SMTP_EMAIL_PASSWORD,
		},
	});
}

// Add this function to verify the reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
	if (!token) {
		console.warn('No reCAPTCHA token provided');
		return false;
	}
	
	try {
		console.log('Verifying reCAPTCHA token (truncated):', token.substring(0, 10) + '...');
		console.log('Secret key exists:', Boolean(process.env.RECAPTCHA_SECRET_KEY));
		
		// Direct call to Google's reCAPTCHA verification API
		const secretKey = process.env.RECAPTCHA_SECRET_KEY;
		const response = await fetch(
		`https://www.google.com/recaptcha/api/siteverify`,
		{
			method: 'POST',
			headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `secret=${secretKey}&response=${token}`,
		}
		);
		
		const data = await response.json();
		console.log('reCAPTCHA verification response:', JSON.stringify(data));
		
		if (!data.success) {
			console.error('reCAPTCHA verification failed with error codes:', data['error-codes']);
		}
		
		return data.success === true;
	} catch (error) {
		console.error('reCAPTCHA verification error:', error);
		return false;
	}
}

// Main Send Contact Form Action
export async function sendContactForm(
	prevState: { success: boolean; message: string },
	formData: FormData
) {
	// Parse form data
	const rawFormData = {
		fullname: formData.get('fullname')?.toString() || '',
		email: formData.get('email')?.toString() || '',
		message: formData.get('message')?.toString() || '',
		token: formData.get('token')?.toString() || ''
	};

	console.log('+++ Sending email...');
	// Log token for debugging
	console.log('reCAPTCHA token length:', rawFormData.token?.length || 0);
	console.log('reCAPTCHA token exists:', Boolean(rawFormData.token));

	// Validate input
	const validationResult = ContactFormSchema.safeParse({
		fullname: rawFormData.fullname,
		email: rawFormData.email,
		message: rawFormData.message
	});

	if (!validationResult.success) {
		return {
		success: false,
		message: validationResult.error.errors[0].message
		};
	}

	// Verify reCAPTCHA
	const token = rawFormData.token as string;
	const isHuman = await verifyRecaptcha(token);
	
	if (!isHuman) {
		return {
		success: false, 
		message: 'Failed reCAPTCHA verification'
		};
	}

	try {
		const transporter = createEmailTransporter();

		// Send notification email to site owner
		console.debug('Sending email to site owner...');
		await transporter.sendMail({
			from: process.env.SMTP_EMAIL_USER,
			replyTo: rawFormData.email,
			to: process.env.SMTP_EMAIL_USER,
			subject: `New Contact Form: Message from ${rawFormData.fullname}`,
			text: `
				Name: ${rawFormData.fullname}
				Email: ${rawFormData.email}
				
				Message:
				${rawFormData.message}
			`
		});

		// Send confirmation email to the sender
		console.debug('Sending confirmation email to the sender...');
		await transporter.sendMail({
			from: process.env.SMTP_EMAIL_USER,
			to: rawFormData.email,
			subject: `Thank you for contacting us`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px;">
				<h2>Thank you for contacting me!</h2>
				<p>Dear ${rawFormData.fullname},</p>
				<p>I just received your message and will respond as soon as possible.</p>
				<div style="margin: 20px 0; padding: 15px; background-color: #f7f7f7; border-left: 4px solid #007bff;">
				<p><strong>Your message:</strong></p>
				<p>${rawFormData.message.replace(/\n/g, '<br>')}</p>
				</div>
				<p>Best regards,<br>Tiziano</p>
				<img src="${process.env.NEXT_PUBLIC_APP_URL}/images/my_logo.svg" alt="Tiziano's logo" style="display: block; margin: 0; width: 50px; height: 50px;">
				</div>
			`
		});

		return {
			success: true,
			message: 'Message sent successfully!'
		};
	} catch (error) {
		console.error('Email sending error:', error);
		return {
			success: false,
			message: 'Failed to send message'
		};
	}
}