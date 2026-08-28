import type { NextConfig } from "next";

/** Project Pages live at https://jmystro77.github.io/dj-jeffery-isaac/ */
const repoBase = "/dj-jeffery-isaac";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBase,
  assetPrefix: repoBase,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
