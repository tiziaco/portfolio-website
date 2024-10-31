'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation Schema
const ContactFormSchema = z.object({
	fullname: z.string().min(2, { message: "Name must be at least 2 characters" }),
	email: z.string().email({ message: "Invalid email address" }),
	message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

// Recaptcha Verification
async function verifyRecaptcha(token: string): Promise<boolean> {
	try {
		const secretKey = process.env.RECAPTCHA_SECRET_KEY;
		const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';

		const response = await fetch(verifyUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			secret: secretKey || '',
			response: token
		})
		});

		const data = await response.json();
		return data.success && data.score > 0.7;
	} catch (error) {
		console.error('reCAPTCHA verification error:', error);
		return false;
	}
}

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

// Main Send Contact Form Action
export async function sendContactForm(
	prevState: { success: boolean; message: string },
	formData: FormData
) {
	// Parse form data
	const rawFormData = {
		fullname: formData.get('fullname'),
		email: formData.get('email'),
		message: formData.get('message'),
		token: formData.get('token')
	};

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
		
		await transporter.sendMail({
		from: process.env.SMTP_EMAIL_USER, // Sender's email
		replyTo: rawFormData.email as string, // Set reply-to as sender's email
		to: process.env.SMTP_EMAIL_USER,
		subject: `New Contact Form: Message from ${rawFormData.fullname}`,
		text: `
			Name: ${rawFormData.fullname}
			Email: ${rawFormData.email}
			
			Message:
			${rawFormData.message}
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