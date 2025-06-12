import type { NextConfig } from "next"

const nextConfig = {
    productionBrowserSourceMaps: false,
    compress: true,
    poweredByHeader: false,
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "*" },
            { protocol: "http", hostname: "*" },
        ],
        minimumCacheTTL: 60,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

} satisfies NextConfig

