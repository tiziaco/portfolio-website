import Contact from "@/components/Contact";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<div>
			<Hero />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}
