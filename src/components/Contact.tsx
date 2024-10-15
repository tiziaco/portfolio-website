import ContactForm from "./ui/ContactForm"

const Contact = () => {
	return (
		<section id='contact'>
			<div className="py-20">
				{/* Section title */}
				<h2 className="heading">
					Found something interesting? {' '}
					<span className="text-green-500">Contact Me</span>
				</h2>
				<ContactForm />
			</div>
		</section>
	)
}

export default Contact