'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { AnimationVariants } from '@/types/animation';

interface AnimatedContainerProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
	children: React.ReactNode;
	variants: AnimationVariants;
	className?: string;
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({ 
	children, 
	variants,
	className,
	...props
}) => {
	return (
		<motion.div 
			className={className}
			variants={variants}
			initial="hidden"
			animate="visible"
			{...props}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedContainer;
