import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://delkashindia.co.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/', '/api/*'],
      },
      // Major Search Engines
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/'],
      },
      // AI Search & LLM Web Indexing Agents (AIO / GEO)
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'Google-Extended',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Applebot-Extended',
          'cohere-ai',
          'Bytespider',
          'CCBot',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt', '/sitemap.xml'],
        disallow: ['/admin', '/admin/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
