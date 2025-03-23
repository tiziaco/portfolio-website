
import '@styles/globals.css';
import '@styles/background.scss';

import { Suspense } from 'react';
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import Background from "@/components/Background";
import { ThemeProvider } from "@/components/ThemeProvider"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import GoogleAnalytics from "@/components/scripts/GoogleAnalytics";

import type { Metadata } from "next";

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
	title: "Tiziano's portfolio | Software Engineer",
	description: "Welcome to Tiziano’s portfolio—a showcase of software and web development expertise. Discover projects in data-intensive and AI-powered solutions, crafted with a focus on innovation and scalability.",
	keywords: ["Software Engineer", "Full-Stack Developer", "DevOps", "AI", "JavaScript", "Python", "Next.js", "Docker", "Web Development", "Portfolio"],
	authors: [{ name: "Tiziano Iacovelli", url: "https://www.developertiz.com" }],
	creator: "Tiziano Iacovelli",
	publisher: "Tiziano I.",
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	alternates: {
		canonical: "https://developertiz.com",
	},
	openGraph: {
		title: "Tiziano | Full-Stack Developer Portfolio",
		description: "Explore Tiziano's projects and skills in web development and software engineering",
		url: "https://developertiz.com",
		siteName: "Tiziano's Portfolio",
		images: [
		{
			url: "https://developertiz.com/og_image.png",
			width: 1200,
			height: 630,
			alt: "Tiziano's Portfolio",
		},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tiziano | Software Developer Portfolio",
		description: "Explore Tiziano's projects and skills in software engineering and web development",
		creator: "@Tiz_iaco",
		images: ["https://developertiz.com/og_image.png"],
		},
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({children,}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Suspense fallback={null}>
				<GoogleAnalytics
				GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''}
				/>
			</Suspense>
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<div className="background">
						<Background />
					</div>
					<main className='app'>
						<NavBar />
						{children}
					</main>
					<Footer />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
