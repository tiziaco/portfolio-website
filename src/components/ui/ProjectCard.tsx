import { cn } from "@/lib/utils";
import Image from "next/image";

import { TbWorld } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io";

export function ProjectCard( {title, description, image, techStack, webLink, gitLink}: 
	{
		title: string,
		description: string,
		image: string,
		techStack: string[],
		webLink: string,
		gitLink: string
	})
	{
	return (
	<Card className="glassmorphism">
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
				<PillBadges items={techStack} />
				<CardDescription>{description}</CardDescription>
			</div>

			<div className="flex w-full justify-end px-4">
				{gitLink && (
					<a href={gitLink} target="_blank" className="hover:opacity-75 p-2 flex items-center justify-center">
						<IoLogoGithub className="h-10 w-10" />
					</a>
				)}
				{webLink && (
					<a href={webLink} target="_blank" className="hover:opacity-75 p-2 flex items-center justify-center">
						<TbWorld className="h-10 w-10" />
					</a>
				)}
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
		"text-xl font-bold text-gray-800 dark:text-white py-2",
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
		"text-sm font-normal pt-4 text-neutral-600 dark:text-neutral-400 max-w-sm",
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
	<div className="flex flex-wrap gap-2 py-2 justify-start w-full">
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