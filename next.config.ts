/** @type {import('next').NextConfig} */
const repo = "portfolio";
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,           // 핵심
    basePath: isProd ? "/portfolio" : "",
    assetPrefix: isProd ? "/portfolio/" : "",
};

export default nextConfig;