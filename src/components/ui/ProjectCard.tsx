import { cn } from "@/lib/utils";
import Image from "next/image";

export function ProjectCard( {title, description, image, techStack}: 
	{
		title: string,
		description: string,
		image: string,
		techStack: string[]
	})
	{
	return (
	<Card>
		<CardImgContainer>
			<Image
				fill={true}
				alt="image"
				src={image}
				className="object-cover z-10 absolute top-0"
			/>
		</CardImgContainer>
			<div className="flex flex-col items-center flex-grow mt-7 px-4">
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</div>
			<div className="mt-auto w-full px-4">
				<PillBadges items={techStack} />
		</div>
	</Card>
	);
}



export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
	<div
		className={cn(
		"lg:min-h-[32.5rem] h-[25rem] flex flex-col pb-6 rounded-xl items-center justify-center sm:w-96 w-[80vw] bg-[#13162D] group",
		className
		)}
	>
		{children}
	</div>
	);
};

export const CardTitle = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
	<h3
		className={cn(
		"text-lg font-semibold text-gray-800 dark:text-white py-2",
		className
		)}
	>
		{children}
	</h3>
	);
};

export const CardDescription = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
	<p
		className={cn(
		"text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
		className
		)}
	>
		{children}
	</p>
	);
};

export const CardImgContainer = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
	<div
		className={cn(
		"relative w-full h-[50%] lg:h-[40%] overflow-hidden rounded-t-xl",
		className,
		"bg-[#13162D] dark:bg-[rgba(40,40,40,0.70)]"
		)}
	>
		{children}
	</div>
	);
};

const PillBadges = ({ items }: {items:string[]}) => {
	return (
	<div className="flex flex-wrap gap-2 pt-5 justify-start w-full">
		{items.map((item, index) => (
		<span
			key={index}
			className="bg-purple-400 dark:text-white text-black text-sm font-semibold px-2 py-1 rounded-full"
		>
			{item}
		</span>
		))}
	</div>
	);
};

export default PillBadges;