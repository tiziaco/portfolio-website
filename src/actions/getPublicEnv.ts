'use server'

export async function getEnvVariables() {
	return {
		RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
	}
}