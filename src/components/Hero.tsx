import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
	return (
	<div className='pb-20 pt-10'>

		<div className="flex justify-center relative my-20 z-10">
			<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

				<p className="text-center md:tracking-wider mb-4 text-lg md:text-lg lg:text-3xl">
					Hi! I&apos;m Tiziano.
				</p>

				<TextGenerateEffect
					words="Engineering innovative digital experiences with a foundation in real-world problem-solving"
					className="text-center text-[40px] sm:text-2xl md:text-5xl lg:text-6xl bg-opacity-50"
				/>
				
				<MagicButton
					title="Discover more"
					icon={<FaLocationArrow />}
					position="right"
					href="#about"
				/>

			</div>
		</div>
	</div>
	)
}

export default Hero