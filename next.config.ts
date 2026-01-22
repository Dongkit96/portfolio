/** @type {import('next').NextConfig} */
const repo = "portfolio";

const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    basePath: `/${repo}`,
    assetPrefix: `/${repo}/`,
    trailingSlash: true,
};

module.exports = nextConfig;