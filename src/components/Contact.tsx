import { ContactForm } from "./ui/ContactForm"
import { ReCaptchaProvider } from "next-recaptcha-v3";

const Contact = () => {
	return (
		<section id='contact'>
			<ReCaptchaProvider >
				<div className="py-20">
					{/* Section title */}
					<h2 className="heading drop-shadow-2xl">
						Found something interesting? {' '}
						<span className="text-green-500 drop-shadow-3xl">Contact Me</span>
					</h2>
					<ContactForm />
				</div>
			</ReCaptchaProvider>
		</section>
	)
}

export default Contact