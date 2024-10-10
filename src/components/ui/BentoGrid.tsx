import { cn } from "@/lib/utils";
import Image from 'next/image';
import PillBadges from "./PillBadges";

import { techStack } from "@/data/about_content";


export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	id,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	return (
		<div
			className={cn(
				"relative overflow-hidden glassmorphism rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
				className
			)}
			// style={{
			// 	background: "rgb(4,7,29)",
			// 	backgroundColor:
			// 		"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			// }}
		>
			{/* Add image for Item 6 (bottom-right) */}
			<div className={`${id === 6 && "flex justify-center"} h-full`}>
				<div className="w-full h-full absolute p-5">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(imgClassName, "object-cover object-center ")}
						/>
					)}
				</div>

				{/* Add Image for Item 5 */}
				<div
					className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
						} `}
				>
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div>

				{/* Title and Description Rendering */}
				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-center items-center"
					)}
				>
					{/* Conditional rendering based on the ID */}
					{ id === 4 ? (
						// Layout for ID 4 (title on left, tech stack on right)
						<div className="flex justify-between items-start relative">
							{/* Left div for title and description */}
							<div className="flex-1 justify-center ite">
								<div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
									{title}
								</div>
								<div className="font-sans font-light max-w-48 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
									{description}
								</div>
							</div>

							{/* Right div for the tech stack pills */}
							<div className="flex-1 flex justify-end">
								<PillBadges items={techStack} />
							</div>
						</div>
					) : (
						// Default layout for all other items
						<>
							{/* Render the description and the title of the card Item */}
							<div className={`font-sans text-lg lg:text-3xl font-bold z-10`}>
								{title}
							</div>
							{description && (
								<div className="font-sans font-extralight max-w-48 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
								{description}
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};
