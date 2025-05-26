"use client";

import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "@public/my_logo.svg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { ThemeToggle } from "./ui/theme-toggle";
import { Button } from "./ui/button";


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
	const backgroundColor = useTransform(scrollY, [0, 50], ["rgba(var(--card), 0)", "rgba(var(--card), 0.8)"]);
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
			className="fixed top-0 left-0 w-full z-50 flex justify-between items-center mb-16 py-4 px-5 md:px-10 lg:px-20 transition-all duration-300"
		>
			<Link href="/" aria-label="link to hero section" className="flex gap-2 items-center h-8">
				<Logo className="w-64 h-auto" />
			</Link>
	
			{/* Desktop Navigation */}
			<div className="lg:flex hidden">
				<div className="flex gap-3 items-center">
					{navItems.map((item) => (
					<Button 
              key={item.name} 
              variant="ghost"
              className="font-semibold h-7"
              asChild
            >
							<Link href={item.link} aria-label={`link to ${item.name} section`}>
							{item.name}
							</Link>
            </Button>
					))}
					<ThemeToggle />
				</div>
			</div>
	
		  {/* Mobile Navigation */}
			<div ref={dropdownRef} className="lg:hidden flex relative">
				{!toggleDropdown && (
					<Button
					onClick={() => setToggleDropdown(true)}
					variant="ghost"
					size="icon"
					className="flex items-center justify-center p-0 gap-0"
					aria-label="Open dropdown navigation bar"
					>
						<IoMenu className="!w-8 !h-8" />
					</Button>
				)}
				
				{toggleDropdown && (
					<motion.div 
					initial={{ x: "100%" }}
					animate={{ x: 0 }}
					exit={{ x: "100%" }}
					transition={{ duration: 0.3 }}
					className="dropdown fixed top-0 right-0 w-3/4 md:w-1/2 h-screen bg-background z-50 flex flex-col items-center justify-center overflow-y-auto"
					>
					{/* Close Icon in Top Right Corner */}
					<Button
						onClick={() => setToggleDropdown(false)}
						variant="ghost"
						size="icon"
						className="absolute top-4 right-5 md:right-10 flex items-center justify-center"
						aria-label="Close dropdown menu"
					>
						<IoClose className="!w-8 !h-8"/>
					</Button>
					
					{/* Navigation Links Container */}
					<div className="flex flex-col items-center justify-center gap-8 w-full">
						{/* Navigation Links */}
						{navItems.map((item) => (
						<Button 
							key={item.name} 
							variant="ghost"
							className="font-semibold text-xl w-40" // Keep the text larger for mobile
							asChild
						>
							<Link 
							href={item.link}
							onClick={() => setToggleDropdown(false)}
							aria-label={`link to ${item.name} section`}
							>
							{item.name}
							</Link>
						</Button>
						))}
						{/* Theme Toggle */}
						<div className="mt-4">
							<ThemeToggle />
						</div>
					</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	  );
	};

export default NavBar;
