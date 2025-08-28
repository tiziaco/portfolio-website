import { gridItems } from "@/data/about_content";
import BentoGrid from "./ui/BentoGrid";
import HighlightText from "./ui/HighlightText";

const About = () => {
	return (
		<section id="about">
			<div className="py-20">
				{/* Section title */}
				<HighlightText as="h2"
					className="heading"
					highlightIndices={[1, 2]}
				>
					Something about me
				</HighlightText>

				<BentoGrid items={gridItems} />

			</div>
		</section>
	);
};

export default About;