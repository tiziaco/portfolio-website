"use client";

import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "@public/my_logo.svg";
import { IoMenu } from "react-icons/io5";


const navItems = [
	{ name: "About", link: "#about" },
	{ name: "Projects", link: "#projects" },
	{ name: "Contact", link: "#contact" },
];

const NavBar = () => {
	const [toggleDropdown, setToggleDropdown] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	// Use Framer Motion's useScroll hook
	const { scrollY } = useScroll();
	
	// Interpolating the background color based on scroll position
	const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(4,7,29, 0)", "rgba(4,7,29, 0.5)"]);
	const backdropBlur = useTransform(scrollY, [0, 50], ["none", "blur(10px)"]);
	const boxShadow = useTransform(scrollY, [0, 50], ["none", "0px 4px 10px rgba(0, 0, 0, 0.1)"]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			  setToggleDropdown(false);
			}
		  };
	  
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
		  document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	
	return (
		<motion.nav
			style={{ backgroundColor, boxShadow, backdropFilter: backdropBlur }}
			className="fixed top-0 left-0 w-full z-50 flex justify-between items-center mb-16 py-4 px-10 md:px-20 transition-all duration-300 backdrop-blur-md"
		>
			<Link href="/" aria-label="link to hero section" className="flex gap-2 items-center h-8">
				<Logo className="w-64 h-auto text-white" />
			</Link>

			{/* Desktop Navigation */}
			<div className="sm:flex hidden">
				<div className="flex gap-5 md:gap-10">
					{navItems.map((item) => (
						<Link key={item.name} href={item.link} className="text-lg font-medium hover:text-green-500">
							{item.name.toLocaleUpperCase()}
						</Link>
					))}
				</div>
			</div>

			{/* Mobile Navigation */}
			<div ref={dropdownRef} className="sm:hidden flex relative">
				<button
					onClick={() => setToggleDropdown(!toggleDropdown)}
					className="flex items-center justify-center"
				>
					<IoMenu className="h-10 w-10"/>
				</button> 

				{toggleDropdown && (
					<div className="dropdown">
						{navItems.map((item) => (
							<Link
								key={item.name}
								href={item.link}
								className="dropdown_link"
								onClick={() => setToggleDropdown(false)}
							>
								{item.name}
							</Link>
						))}
					</div>
				)}
			</div>
		</motion.nav>
	);
};

export default NavBar;
