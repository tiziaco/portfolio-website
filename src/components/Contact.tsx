import { ContactForm } from "./ui/ContactForm"
import { ReCaptchaProvider } from "next-recaptcha-v3";
import HighlightText from "./ui/HighlightText";

const Contact = () => {
	return (
		<section id='contact'>
			<ReCaptchaProvider >
				<div className="py-20">
					{/* Section title */}
					<HighlightText as="h2"
						className="heading"
						highlightIndices={[3, 4]}
					>
						Found something interesting? Contact me
					</HighlightText>
				
					<ContactForm />
				</div>
			</ReCaptchaProvider>
		</section>
	)
}

export default Contact