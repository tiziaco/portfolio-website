import Link from "next/link";
import Image from "next/image";

import logo from "@public/logo.svg"
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

export const Footer = () => {
	return (
	<footer className="bg-[#13162D] py-6">
		<div className="mx-auto px-20">
			<div className="flex flex-col w-full md:flex-row items-center justify-between">

				{/* Logo */}
				<div className="mt-6 md:mt-0 relative">
					<Link href='/' className='flex gap-2 flex-center relative w-full h-8'>
						<Image
							src={logo}
							alt='logo'
							width={100}
							height={40}
							className='object-contain'
						/>
					</Link>
				</div>

				{/* Copyright Text */}
				<div className="text-center md:text-right dark:text-white">
					<p>Copyright&copy;2024. Crafted with care.</p>
				</div>

				{/* Social Icons */}
				<div className="flex space-x-4 mt-6 md:mt-0">
					<a href="#" className="hover:opacity-75 border border-stone-50 p-2 rounded-full flex items-center justify-center w-10 h-10">
						<FaLinkedinIn className="h-6" />
					</a>
					<a href="#" className="hover:opacity-75 border border-stone-50 p-2 rounded-full flex items-center justify-center w-10 h-10">
						<TbBrandGithubFilled className="h-6" />
					</a>
				</div>
			</div>

		</div>
	</footer>
	);
};

export default Footer;