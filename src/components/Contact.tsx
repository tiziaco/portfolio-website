import ContactForm from "./ui/ContactForm"

const Contact = () => {
	return (
		<section id='contact'>
			<div className="py-20">
				{/* Section title */}
				<h1 className="heading">
					Found something interesting? {' '}
					<span className="text-green-500">Contact Me</span>
				</h1>
				<ContactForm />
			</div>
		</section>
	)
}

export default Contact