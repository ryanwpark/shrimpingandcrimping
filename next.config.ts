import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	allowedDevOrigins: ['network.dev', '*.local-origin.dev'],
};

export default nextConfig;
