/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",

	webpack(config, { isServer }) {
		config.module.rules.push({
		  test: /\.svg$/,
		  issuer: {
			and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
		  },
		  use: ['@svgr/webpack'],
		});
	
		return config;
	  },
	  
};

export default nextConfig;
