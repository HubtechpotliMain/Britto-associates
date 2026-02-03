import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.brittoassociates.com';
  
  return [
    {
      url: baseUrl,
      lastModified: '2026-01-16T10:00:51+00:00',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: '2026-01-16T10:00:51+00:00',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/education`,
      lastModified: '2026-01-16T10:00:52+00:00',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: '2026-01-16T10:00:52+00:00',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: '2026-01-16T10:00:52+00:00',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2026-01-14T07:34:34+00:00',
      priority: 0.8,
    },
  ];
}
