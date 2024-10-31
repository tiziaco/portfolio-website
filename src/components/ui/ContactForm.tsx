'use client';

import { useState, useEffect } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactFormContent from './ContactFormContent';

// Helper function to fetch environment variables 
async function getEnvVariables() {
  return {
	RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''
  };
}

export default function ContactForm() {
  const [reCaptchaKey, setReCaptchaKey] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch reCAPTCHA key on component mount
  useEffect(() => {
	async function fetchEnvVariables() {
	  try {
		const envVars = await getEnvVariables();
		const siteKey = envVars.RECAPTCHA_SITE_KEY;
		
		if (siteKey) {
		  setReCaptchaKey(siteKey);
		} else {
		  toast.error('reCAPTCHA configuration error');
		}
	  } catch (error) {
		toast.error('Failed to load reCAPTCHA');
		console.error('reCAPTCHA loading error:', error);
	  } finally {
		setIsLoading(false);
	  }
	}

	fetchEnvVariables();
  }, []);

  // Render loading or error states
  if (isLoading) {
	return <p>Loading contact form...</p>;
  }

  // Ensure we have a valid reCAPTCHA key
  if (!reCaptchaKey) {
	return <p>Unable to load contact form. Please try again later.</p>;
  }

  return (
	<>
	  <GoogleReCaptchaProvider 
		reCaptchaKey={reCaptchaKey}
		scriptProps={{
		  async: true,
		  defer: true,
		  appendTo: 'head'
		}}
	  >
		<ContactFormContent />
	  </GoogleReCaptchaProvider>
	  
	  <ToastContainer 
		position="top-right"
		autoClose={2000}
		hideProgressBar={false}
		newestOnTop={false}
		closeOnClick
		rtl={false}
		pauseOnFocusLoss
		draggable
		pauseOnHover
	  />
	</>
  );
}