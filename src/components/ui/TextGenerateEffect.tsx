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
			"h1",
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
						<motion.h1
							key={word + idx}
							// change here if idx is greater than 3, change the text color to #CBACF9
							className={`inline ${
								idx > 1 && idx < 4 || idx > 8
								  ? "text-green-500 drop-shadow-3xl" // Always green for 1 < idx < 3 and idx > 8
								  : "text-inherit" // default color
							  } opacity-0 drop-shadow-2xl`}
						>
							{word}{" "}
						</motion.h1>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn("font-bold", className)}>
			<div className="my-4">
				<div className=" dark:text-white text-black leading-snug tracking-wide drop-shadow-2xl">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};