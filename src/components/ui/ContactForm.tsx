'use client';

import { sendContactForm } from '@/actions/contact';
import { useState, useTransition, FormEvent } from 'react';
import LitUpButton from './LitUpButton';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

function ContactFormContent() {
	const [fullname, setFullname] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');
	const [isPending, startTransition] = useTransition();
	const [status, setStatus] = useState<string>('');
	const { executeRecaptcha } = useGoogleReCaptcha();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!executeRecaptcha) {
			setStatus('reCAPTCHA not loaded');
			return;
		}

		const token = await executeRecaptcha('contact_form');
		console.log('reCAPTCHA token:', token);

		startTransition(async () => {
			const result = await sendContactForm({ fullname, email, message, token });
			if (result.success) {
				setStatus('Message sent successfully');
				setFullname('');
				setEmail('');
				setMessage('');
			} else {
				setStatus('Failed to send message');
			}
		});
	};

	return (
		<div className="contact-form flex flex-col justify-center items-center pt-10">
			<form onSubmit={handleSubmit} className='form_container glassmorphism'>
				
				<div>
					<label>Fullname</label>
					<input
						type="text"
						value={fullname}
						onChange={(e) => setFullname(e.target.value)}
						required
						className='form_input'
					/>
				</div>
				<div>
					<label>Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className='form_input'
					/>
				</div>
				<div>
					<label>Message</label>
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
						className='form_textarea'
					/>
				</div>

				<LitUpButton isPending={isPending}/>
			</form>
			{status && <p>{status}</p>}
		</div>
	);
}

export default function ContactForm() {
	return (
		<GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}>
			<ContactFormContent />
		</GoogleReCaptchaProvider>
	);
}