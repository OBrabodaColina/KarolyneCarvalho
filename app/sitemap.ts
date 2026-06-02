import { MetadataRoute } from 'next';

// Força o Next.js a gerar este arquivo estaticamente no build
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://karolynecarvalho.com.br',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}