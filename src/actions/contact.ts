'use server';

import nodemailer from 'nodemailer';

interface ContactForm {
  fullname: string;
  email: string;
  message: string;
  token: string;
}

async function verifyRecaptcha(token: string) {
	const secretKey = process.env.RECAPTCHA_SECRET_KEY;
	const verifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
  
	try {
		const response = await fetch(verifyUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams({
				secret: secretKey || '',
				response: token
			})
		});
  
		const data = await response.json();
		console.log('reCAPTCHA verification response:', data);
  
		return data.success && data.score > 0.5;
	} catch (error) {
		console.error('Error verifying reCAPTCHA:', error);
		false;
	}
}

export async function sendContactForm({ fullname, email, message, token }: ContactForm): Promise<{ success: boolean }> {
	const isHuman = await verifyRecaptcha(token);
	if (!isHuman) {
		return { success: false };
	}

  const transporter = nodemailer.createTransport({
	service: 'gmail',
	host: process.env.SMTP_EMAIL_HOST,
	port: 587,
	secure: true,
	auth: {
		user: process.env.SMTP_EMAIL_USER,
		pass: process.env.SMTP_EMAIL_PASSWORD,
		},
	});

  const mailOptions = {
	from: email,
	to: process.env.SMTP_EMAIL_USER,
	subject: `New message from ${fullname}`,
	text: message,
	};

  try {
		await transporter.sendMail(mailOptions);
		return { success: true };
	} catch (error) {
		console.error('Error sending email:', error);
		return { success: false };
	}
}