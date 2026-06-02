import { MetadataRoute } from 'next';

// Força o Next.js a gerar este arquivo estaticamente no build
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://karolynecarvalho.com.br/sitemap.xml',
  };
}