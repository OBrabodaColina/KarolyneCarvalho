import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // O nome deve ser EXATAMENTE igual ao nome do repositório na URL
  basePath: "/KarolyneCarvalho",
  assetPrefix: "/KarolyneCarvalho",
};

export default nextConfig;