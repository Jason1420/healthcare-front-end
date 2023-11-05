/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com/deg7emghq/image',
                pathname: '/uploads/**',
            },
        ],
    },
}

module.exports = nextConfig