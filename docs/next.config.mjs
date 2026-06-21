const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: "export",
  basePath: isProd ? "/reactifyui-icons" : "",
  assetPrefix: isProd ? "/reactifyui-icons/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/reactifyui-icons" : "",
  },
}

export default nextConfig