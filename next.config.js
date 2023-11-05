/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'healthcare-cms.onrender.com',
                pathname: '/uploads/**',
            },
        ],
    },
}

module.exports = nextConfig