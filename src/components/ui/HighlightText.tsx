// components/hero/HighlightText.tsx
import React from 'react';

interface HighlightTextProps {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  children: string;
  className?: string;
  highlightIndices?: number[];
}

const HighlightText: React.FC<HighlightTextProps> = ({
	as = 'p',
	children,
	className,
	highlightIndices = [],
	...props
}) => {
	const Component = as;
	const words = children.split(' ');

return (
	<Component className={className} {...props}>
		{words.map((word, idx) => (
			<span
				key={word + idx}
				className={`inline leading-10 ${
					highlightIndices.includes(idx) ? 'text-green-500 drop-shadow-3xl' : 'text-inherit'
			} drop-shadow-2xl`}
			>
				{word}{' '}
			</span>
		))}
		</Component>
	);
};

export default HighlightText;
