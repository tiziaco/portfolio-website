import { cn } from "@/lib/utils";
import Image from "next/image";

import PillBadges from "./PillBadges";

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
	<Card className="glassmorphism w-full">
		<CardImgContainer>
			<Image
				fill={true}
				sizes="(min-width: 640px) 384px, 80vw"
				alt="image"
				src={image}
				className="object-cover z-10 absolute top-0"
			/>
		</CardImgContainer>
			<div className="flex flex-col items-center flex-grow mt-7 px-8">
				<CardTitle>{title}</CardTitle>
				<PillBadges items={techStack} />
				<CardDescription>{description}</CardDescription>
			</div>

			<div className="flex w-full justify-end px-4">
				{gitLink && (
					<a	href={gitLink}
						target="_blank"
						rel="noreferrer"
						aria-label={`Live website link for ${title} project`}
						className="hover:opacity-75 p-2 flex items-center justify-center"
					>
						<IoLogoGithub className="h-10 w-10" />
					</a>
				)}
				{webLink && (
					<a	href={webLink}
						target="_blank"
						rel="noreferrer"
						aria-label={`GitHub link for ${title} project`}
						className="hover:opacity-75 p-2 flex items-center justify-center">
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
		"flex flex-col pb-6 rounded-xl items-center justify-center bg-[#13162D] group",
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
		"font-medium pt-4 text-neutral-800 dark:text-[rgb(193,194,211)]",
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
		"relative w-full h-48 lg:h-56 overflow-hidden rounded-t-xl",
		className,
		"bg-[#13162D] dark:bg-[rgba(40,40,40,0.70)]"
		)}
	>
		{children}
	</div>
	);
};
