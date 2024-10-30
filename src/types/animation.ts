import { Variant, Variants } from 'framer-motion';

export interface AnimationVariants extends Variants {
	[key: string]: Variant;
	hidden: Variant;
	visible: Variant;
}