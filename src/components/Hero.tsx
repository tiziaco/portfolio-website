'use client';

import AnimatedContainer from '@/components/animated/AnimatedContainer';
import AnimatedItem from "@/components/animated/AnimatedWrapper";
import HighlightText from '@/components/ui/HighlightText';
import MagicButton from '@/components/ui/MagicButton';
import SocialLinks from '@/components/ui/SocialLinks';

import { useAnimationVariants } from '@/hooks/useAnimationVariants';
import { FaLocationArrow } from "react-icons/fa6";

import { gitLink, linkedinLink, threadsLink, mediumLink } from "@/data/about_content";

const Hero: React.FC = () => {
	const { containerVariants, itemVariants, wordVariants } = useAnimationVariants();

	return (
		<div className="flex flex-col items-center justify-center min-h-lvh">
			<AnimatedContainer
				variants={containerVariants}
				className='relative z-10 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center min-h-screen'
			>
					<AnimatedItem
						variants={wordVariants}
						className="text-center md:tracking-wider my-4 text-lg md:text-lg lg:text-3xl"
					>
						<p>Hey there, I&apos;m Tiziano!</p>
					</AnimatedItem>
					
					<AnimatedItem
						variants={wordVariants}
						className="md:tracking-wider my-4 "
					>
						<HighlightText
							as='h1'
							highlightIndices={[1, 2, 3, 8]}
							className='text-center font-bold text-3xl md:text-5xl lg:text-6xl'
						>
							Engineering innovative digital experiences with a foundation in real-world problem-solving
						</HighlightText>
					</AnimatedItem>

					<AnimatedItem variants={itemVariants} className='mt-10'>
						<SocialLinks
							linkedinLink={linkedinLink}
							gitLink={gitLink}
							threadsLink={threadsLink}
							mediumLink={mediumLink}
						/>
    				</AnimatedItem>

					<AnimatedItem variants={itemVariants}>
						<MagicButton
							title="Discover more"
							icon={<FaLocationArrow />}
							position="right"
							href="#about"
						/>
					</AnimatedItem>
				
			</AnimatedContainer>
		</div>
	);
};

export default Hero;
