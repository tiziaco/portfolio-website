"use client"

import { useEffect } from 'react';
import Script from 'next/script';

type WindowWithDataLayer = Window & {
	dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

const GoogleAnalytics: React.FC = () => {
	useEffect(() => {
		window.dataLayer = window.dataLayer || [];
		function gtag(...args: any[]) {
			window.dataLayer.push(args);
		}
		gtag('js', new Date());
		gtag('config', process.env.NEXT_PUBLIC_MEASUREMENT_ID);
	}, []);

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
				`}
			</Script>
		</>
	);
};

export default GoogleAnalytics;