
const PillBadges = ({ items }: {items:string[]}) => {
	return (
	<div className="flex flex-wrap gap-2 pt-5 justify-start w-full">
		{items.map((item, index) => (
		<span
			key={index}
			className="bg-purple-400 dark:text-white text-black text-sm font-semibold px-2 py-1 rounded-full"
		>
			{item}
		</span>
		))}
	</div>
	);
};

export default PillBadges;
