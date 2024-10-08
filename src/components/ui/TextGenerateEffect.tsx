"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}) => {
	const [scope, animate] = useAnimate();
	const wordsArray = words.split(" ");
	useEffect(() => {
		animate(
			"span",
			{
				opacity: 1,
			},
			{
				duration: 2,
				delay: stagger(0.2),
			}
		);
	}, [scope.current]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							// change here if idx is greater than 3, change the text color to #CBACF9
							className={`${
								idx > 1 && idx < 4 || idx > 8
								  ? "text-green-500" // Always green for 1 < idx < 3 and idx > 8
								  : "text-inherit" // default color
							  } opacity-0`}
						>
							{word}{" "}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-bold", className)}>
			<div className="my-4">
				<div className=" dark:text-white text-black leading-snug tracking-wide">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};