"use client"

import Link from "next/link";

import Logo from "@public/my_logo.svg";
import { gitLink, linkedinLink, threadsLink, mediumLink } from "@/data/about_content";
import SocialLinks from "./ui/SocialLinks";


export const Footer = () => {
	const date = new Date();
	const currentYear = date.getFullYear();

	return (
	<footer className="bg-[#13162D]">
		<div className="mx-auto md:px-10 lg:px-20 py-6">
			<div className="flex flex-col w-full md:flex-row items-center justify-between">

				{/* Logo */}
				<div className="relative">
					<Link href='/' aria-label="link to hero section" className='flex gap-2 flex-center relative w-full h-8'>
						<Logo className="w-64 h-auto text-white" />
					</Link>
				</div>

				{/* Copyright Text */}
				<div className="text-center md:text-right dark:text-white">
					<p>&copy;{currentYear}. Crafted with care</p>
				</div>

				{/* Social Icons */}
				<SocialLinks
					linkedinLink={linkedinLink}
					gitLink={gitLink}
					threadsLink={threadsLink}
					mediumLink={mediumLink}
				/>
				{/* <div className="flex space-x-4 mt-6 md:mt-0">
					<a href={linkedinLink} target="_blank" aria-label="Linkedin profile link" className="hover:opacity-75 border border-stone-50 p-2 rounded-full flex items-center justify-center w-10 h-10">
						<FaLinkedinIn className="h-6" />
					</a>
					<a href={gitLink} target="_blank" aria-label="GitHub profile link" className="hover:opacity-75 border border-stone-50 p-2 rounded-full flex items-center justify-center w-10 h-10">
						<TbBrandGithubFilled className="h-6" />
					</a>
					<a href={threadsLink} target="_blank" aria-label="Threads profile link" className="hover:opacity-75 border border-stone-50 p-2 rounded-full flex items-center justify-center w-10 h-10">
						<FaThreads className="h-6" />
					</a>
				</div> */}
			</div>

		</div>
	</footer>
	);
};

export default Footer;