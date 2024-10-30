import { FaLinkedinIn, FaThreads } from 'react-icons/fa6';
import { FaMediumM } from "react-icons/fa";
import { TbBrandGithubFilled } from 'react-icons/tb';

interface SocialLinksProps {
	linkedinLink: string;
	gitLink: string;
	threadsLink: string;
	mediumLink: string
}

const SocialLinks: React.FC<SocialLinksProps> = ({ linkedinLink, gitLink, threadsLink, mediumLink }) => {
	return (
		<div className=" p-2 rounded-full bg-transparent flex space-x-4 mt-6 md:mt-0">
			<a
				href={gitLink}
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub profile link"
				className="hover:text-green-500 p-2 rounded-full flex items-center justify-center w-10 h-10"
			>
				<TbBrandGithubFilled className="h-6" />
			</a>
			<a
				href={linkedinLink}
				target="_blank"
				rel="noreferrer"
				aria-label="Linkedin profile link"
				className="hover:text-green-500  p-2 rounded-full flex items-center justify-center w-10 h-10"
			>
				<FaLinkedinIn className="h-6" />
			</a>
			<a
				href={threadsLink}
				target="_blank"
				rel="noreferrer"
				aria-label="Threads profile link"
				className="hover:text-green-500 p-2 rounded-full flex items-center justify-center w-10 h-10"
			>
				<FaThreads className="h-6" />
			</a>
			<a
				href={mediumLink}
				target="_blank"
				rel="noreferrer"
				aria-label="Medium profile link"
				className="hover:text-green-500 p-2 rounded-full flex items-center justify-center w-10 h-10"
			>
				<FaMediumM className="h-6" />
			</a>
		</div>
	);
};

export default SocialLinks;
