"USe client"

import { Variant } from "framer-motion";
import { AnimationVariants } from "@/types/animation";

export const useAnimationVariants = () => {
	const containerVariants: AnimationVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2
			}
		}
	};

	const itemVariants: AnimationVariants = {
		hidden: { y: -20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut"
			}
		}
	};

	const wordVariants: AnimationVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: "easeOut"
			}
		}
	};

	return { containerVariants, itemVariants, wordVariants };
};