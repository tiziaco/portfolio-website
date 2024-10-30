'use client';

import { motion } from 'framer-motion';
import { AnimationVariants } from '@/types/animation';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  variants: AnimationVariants;
  className?: string;
}

const AnimatedItem: React.FC<AnimatedWrapperProps> = ({
	children,
	variants,
	className,
}) => {
	return (
		<motion.div variants={variants} className={className}>
		{children}
		</motion.div>
	);
};

export default AnimatedItem;