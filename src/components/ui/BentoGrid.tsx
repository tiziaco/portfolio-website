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

interface BentoGridItemProps {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
	className,
	id,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImg,
	}) => {
	const renderImage = (imageSrc?: string, imgClass?: string, containerClass?: string) => (
		<div className={cn(containerClass, 'relative w-full h-full')}>
			{imageSrc && (
				<div className="absolute inset-2 bottom-0 ">
				<Image
					src={imageSrc}
					alt={imageSrc}
					fill
					className={cn(imgClass, 'object-cover object-center')}
					style={{ 
					objectFit: id === 1 ? 'contain' : 'cover',
					objectPosition: 'center'
					}}
					/>
				</div>
			)}
		</div>
		);

	const renderTitleAndDescription = () => (
		<div className="z-10 flex flex-col p-5 md:p-10 justify-center items-center absolute inset-0">
			{title &&(
				<div className={cn(titleClassName,
					"font-sans text-xl text-gray-100 md:text-2xl lg:text-3xl font-bold")}>
					<h3>{title}</h3>
				</div>
			)}
			{description && (
				<div className="whitespace-pre-line font-sans font-medium text-base lg:text-lg text-[rgb(193,194,211)]">
					<p>{description}</p>
				</div>
			)}
		</div>
	);

	const renderLayoutForID4 = () => (
		<div className="flex flex-col md:flex-row justify-between items-start p-5 lg:p-10 z-10">
			<div className="flex-1 md:pr-4">
				<div className="font-sans text-xl md:text-2xl lg:text-3xl max-w-96 font-bold">
					<h3>{title}</h3>
				</div>
				<div className="pt-5 font-sans font-medium text-base lg:text-lg text-[rgb(193,194,211)]">
					<p>{description}</p>
				</div>
			</div>
			<div className="flex-1 flex justify-end">
				{techStack && <PillBadges items={techStack} />}
			</div>
		</div>
	);
  
	return (
		<div
		className={cn(
			'relative overflow-hidden glassmorphism rounded-3xl border border-white/[0.1] shadow-xl dark:shadow-none',
			'min-h-[200px]',
			className
		)}
		>
			<div className="absolute inset-0">
				{renderImage(img, imgClassName)}
			</div>
			{spareImg && (
				<div className={cn('absolute right-0 bottom-0', id === 5 ? 'w-full h-full opacity-80' : 'w-1/2 h-1/2')}>
					{renderImage(spareImg, 'object-cover object-center')}
				</div>
			)}
			<div className="relative h-full flex flex-col justify-between items-center">
				{id === 4 ? renderLayoutForID4() : renderTitleAndDescription()}
			</div>
		</div>
	);
  };
