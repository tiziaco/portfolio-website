import type { Metadata } from "next";
import {Inter} from "next/font/google"

import '@styles/globals.css';
import '@styles/background.scss';
import Background from "@/components/Background";
import { ThemeProvider } from "@/components/ThemeProvider"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";


const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
	title: "Tiziano's portfolio",
	description: "Tiziano's developer portfolio website.",
};

export default function RootLayout({children,}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
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
				</ThemeProvider>
			</body>
		</html>
	);
}
