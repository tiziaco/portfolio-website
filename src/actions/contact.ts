'use server';

import nodemailer from 'nodemailer';

interface ContactForm {
	fullname: string;
	email: string;
	message: string;
}

export async function sendContactForm({ fullname, email, message }: ContactForm): Promise<{ success: boolean }> {
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
		to: process.env.SMTP_EMAIL_USER, // Your email address to receive contact messages
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
