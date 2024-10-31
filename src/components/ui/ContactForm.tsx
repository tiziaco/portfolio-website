'use client';

import { useState, useEffect, useTransition, FormEvent } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { sendContactForm } from '@/actions/sendEmail';
import { getEnvVariables } from '@/actions/getPublicEnv';
import LitUpButton from './LitUpButton';

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface SentEmailState {
	setIsEmailSent: React.Dispatch<React.SetStateAction<boolean>>;
  }

function ContactFormContent({ setIsEmailSent } : SentEmailState) {
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
		// console.log('reCAPTCHA token:', token);

		startTransition(async () => {
			const result = await sendContactForm({ fullname, email, message, token });
			if (result.success) {
				setStatus('Message sent successfully');
				setIsEmailSent(true);
				setFullname('');
				setEmail('');
				setMessage('');
			} else {
				setStatus('Failed to send message');
			}
		});
	};

	return (
		<div className="flex flex-col justify-center items-center pt-10">
			<form onSubmit={handleSubmit} className='form_container glassmorphism'>
				
				<div>
					<label className='pl-3'>Fullname</label>
					<input
						type="text"
						value={fullname}
						onChange={(e) => setFullname(e.target.value)}
						required
						aria-label="Full name"
						className='form_input form_highlight'
					/>
				</div>
				<div>
					<label className='pl-3'>Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						aria-label="Email"
						className='form_input form_highlight'
					/>
				</div>
				<div>
					<label className='pl-3'>Message</label>
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
						aria-label="Message"
						className='form_textarea form_highlight'
					/>
				</div>

				<LitUpButton isPending={isPending}/>
			</form>
		</div>
	);
}

export default function ContactForm() {
	const [reCaptchaKey, setReCaptchaKey] = useState<string>('')
	const [isEmailSent, setIsEmailSent] = useState(false)

	useEffect(() => {
		async function fetchEnvVariables() {
			const envVars = await getEnvVariables()
			setReCaptchaKey(envVars.RECAPTCHA_SITE_KEY || 'error')
		}
		fetchEnvVariables();
	}, [])

	useEffect(() => {
		if (isEmailSent) {
		  toast.success('Email sent successfully!', {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		  })
		  // Reset the state after showing the toast
		  setIsEmailSent(false)
		}
	}, [isEmailSent])

	return (
		<>
		  {/* Only render the GoogleReCaptchaProvider if the reCaptchaKey is valid */}
		  {reCaptchaKey && reCaptchaKey !== 'error' ? (
			<GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
			  <ContactFormContent setIsEmailSent={setIsEmailSent} />
			</GoogleReCaptchaProvider>
		  ) : (
			<p>Loading reCAPTCHA...</p>
		  )}
		  <ToastContainer />
		</>
	  );
}
