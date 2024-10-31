'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useFormState } from 'react-dom';
import { sendContactForm } from '@/actions/sendEmail';
import LitUpButton from './LitUpButton';
import { toast } from 'react-toastify';

// Initial state for form submission
const initialState = { 
	success: false, 
	message: '' 
};

export default function ContactFormContent() {
	const { executeRecaptcha } = useGoogleReCaptcha();
	const [state, formAction] = useFormState(sendContactForm, initialState);
	const formRef = useRef<HTMLFormElement | null>(null); // Define as potentially null
	const [isPending, setIsPending] = useState(false);

	// Handle form submission with reCAPTCHA
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();  // Prevent default form submission

		// Ensure formRef.current is non-null before using it
		if (!formRef.current) {
			console.error("Form reference is not defined");
			return;
		}

		const formData = new FormData(formRef.current);  // Use formRef.current here safely

		if (!executeRecaptcha) {
			toast.error('reCAPTCHA not loaded');
			return;
		}

		setIsPending(true);

		try {
			const token = await executeRecaptcha('contact_form');
			formData.append('token', token);

			// Wrap `formAction` to simulate a Promise so we can use `finally`
			await new Promise<void>((resolve) => {
				formAction(formData);
				resolve();
			});
		} finally {
			console.log("Message sent.")
		}
	};

	// Handle state changes and show toast notifications
	useEffect(() => {
		if (state.success || state.message) {
			setIsPending(false);
			if (state.success) {
				toast.success(state.message);
				formRef.current?.reset();
			} else {
				toast.error(state.message);
			}
		}
	}, [state]);

  return (
	<div className="flex flex-col justify-center items-center pt-10">
		<form onSubmit={handleSubmit} ref={formRef} className="form_container glassmorphism">
			<div>
				<label htmlFor="fullname" className="pl-3 text-sm text-[rgb(193,194,211)]">Full Name</label>
				<input
					type="text"
					id="fullname"
					name="fullname"
					required
					className="form_input form_highlight"
				/>
			</div>

			<div>
				<label htmlFor="email" className="pl-3 text-sm text-[rgb(193,194,211)]">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					className="form_input form_highlight"
				/>
			</div>

			<div>
				<label htmlFor="message" className="pl-3 text-sm text-[rgb(193,194,211)]">Message</label>
				<textarea
					id="message"
					name="message"
					required
					className="form_textarea form_highlight"
				/>
			</div>

			<LitUpButton isPending={isPending}/>
		</form>
	</div>
	);
}

