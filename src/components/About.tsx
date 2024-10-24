import { gridItems } from "@/data/about_content";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"

const About = () => {
	// console.log(gridItems[2].className)
	return (
		<section id="about">
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

		{/* Test */}
		{/* <BentoGridItem
						id={0}
						key={0}
						title="This is a test 1"
						description="This is a test"
						className="lg:col-span-2 md:col-span-2 md:row-span-5"
						img=""
						imgClassName=""
						titleClassName="justify-center md:max-w-full max-w-60 text-center"
						spareImg=""
					/>

		<BentoGridItem
						id={1}
						key={1}
						title="This is a test 2"
						description="This is a test"
						className="lg:col-span-2 md:col-span-2 md:row-span-5"
						img=""
						imgClassName=""
						titleClassName="justify-center md:max-w-full max-w-60 text-center"
						spareImg=""
					/>
		<BentoGridItem
						id={2}
						key={2}
						title="This is a test 3"
						description="This is a test"
						className="lg:col-span-4 md:col-span-4 md:row-span-10 lg:min-h-[60vh]"
						img=""
						imgClassName=""
						titleClassName="justify-center md:max-w-full max-w-60 text-center"
						spareImg=""
					/>
		<BentoGridItem
						id={3}
						key={3}
						title="This is a test 4"
						description="This is a test"
						className="lg:col-span-4 md:col-span-4 md:row-span-5"
						img=""
						imgClassName=""
						titleClassName="justify-center md:max-w-full max-w-60 text-center"
						spareImg=""
					/>
		
		<BentoGridItem
						id={4}
						key={4}
						title="This is a test 5"
						description="This is a test"
						className="lg:col-span-6 md:col-span-3 md:row-span-5"
						img=""
						imgClassName=""
						titleClassName="justify-center md:max-w-full max-w-60 text-center"
						spareImg=""
					/>
		
		<BentoGridItem
						id={5}
						key={5}
						title="This is a test 6"
						description="This is a test"
						className="lg:col-span-2 md:col-span-1 md:row-span-5"
						img=""
						imgClassName=""
						titleClassName="justify-center md:max-w-full max-w-60 text-center"
						spareImg=""
					/> */}

			</BentoGrid>
		</section>
	);
};

export default About;