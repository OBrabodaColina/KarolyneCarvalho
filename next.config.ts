import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Substitua pelo nome EXATO do seu repositório no GitHub
  basePath: "/KarolyneCarvalho",
  assetPrefix: "/KarolyneCarvalho",
};

export default nextConfig;