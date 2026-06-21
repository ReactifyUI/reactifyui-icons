import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves from /reactifyui-icons/ in production
  basePath: isProd ? "/reactifyui-icons" : "",
  assetPrefix: isProd ? "/reactifyui-icons/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
