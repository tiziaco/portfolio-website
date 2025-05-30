// components/hero/HighlightText.tsx
import React from 'react';

interface HighlightTextProps {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  children: string;
  className?: string;
  highlightIndices?: number[];
  neonEffect?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'pulse' | 'intense';
}

const HighlightText: React.FC<HighlightTextProps> = ({
	as = 'p',
	children,
	className,
	highlightIndices = [],
	neonEffect = 'sm',
	...props
}) => {
	const Component = as;
	const words = children.split(' ');

	const getNeonClasses = (effect: string) => {
		switch (effect) {
			case 'sm':
				return 'text-shadow-neon-sm filter-neon';
			case 'md':
				return 'text-shadow-neon filter-neon';
			case 'lg':
				return 'text-shadow-neon-lg filter-neon';
			case 'xl':
				return 'text-shadow-neon-xl filter-neon';
			case '2xl':
				return 'text-shadow-neon-2xl filter-neon';
			case 'pulse':
				return 'neon-glow animate-neon-pulse';
			case 'intense':
				return 'neon-glow-intense';
			default:
				return 'neon-glow';
		}
	};

return (
	<Component className={`${className} overflow-visible`} {...props}>
		{words.map((word, idx) => (
			<span
				key={word + idx}
				className={`inline leading-10 ${
					highlightIndices.includes(idx) 
						? `text-green-600 dark:text-green-400 ${getNeonClasses(neonEffect)}` 
						: 'text-inherit drop-shadow-2xl'
			}`}
			>
				{word}{' '}
			</span>
		))}
		</Component>
	);
};

export default HighlightText;
