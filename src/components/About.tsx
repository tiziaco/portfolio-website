import { gridItems } from "@/data/about_content";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"

const About = () => {
	return (
		<section id="about">
			<div className="py-20">
				{/* Section title */}
				<h2 className="heading">
					Something {' '}
					<span className="text-green-500 drop-shadow-3xl">about me</span>
				</h2>

				{/* Bento grid */}
				<BentoGrid className="py-20 px-0 md:px-10">
					{gridItems.map((item, i) => (
						<BentoGridItem
							id={item.id}
							key={i}
							title={item.title}
							description={item.description}
							className={item.className}
							img={item.img}
							imgClassName={item.imgClassName}
							titleClassName={item.titleClassName}
							spareImg={item.spareImg}
						/>
					))}
				</BentoGrid>
			</div>
		</section>
	);
};

export default About;