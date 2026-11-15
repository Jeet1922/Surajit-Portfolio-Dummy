import { basePath } from "./content/site-config.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig