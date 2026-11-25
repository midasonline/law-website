import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  devIndicators: false,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/static-image-loader.ts",
    deviceSizes: [640, 960, 1280, 1920, 2560],
    imageSizes: [128, 256, 384],
  },
};

export default nextConfig;
