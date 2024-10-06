
const LitUpButton = ({isPending} : 
	{isPending:boolean}) => {
  return (
	<div className="flex justify-end">
		<button
			type="submit"
			className="p-[3px] relative">
			<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
			<div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
			{isPending ? 'Sending...' : 'Send Message'}
			</div>
		</button>
	</div>
  )
}

export default LitUpButton