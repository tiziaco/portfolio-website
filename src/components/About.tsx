import { gridItems } from "@/data/about_content";
import BentoGrid from "./ui/BentoGrid";

const About = () => {
	return (
		<section id="about">
			<div className="py-20">
				{/* Section title */}
				<h2 className="heading">
					Something {' '}
					<span className="text-green-500 drop-shadow-3xl">about me</span>
				</h2>

				<BentoGrid items={gridItems} />

			</div>
		</section>
	);
};

export default About;