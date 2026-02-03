import { MetadataRoute } from 'next'

export const dynamic = 'force-static';


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/wp-admin/', '/wp-login.php', '/cart/', '/checkout/'],
    },
    sitemap: 'https://www.brittoassociates.com/sitemap.xml',
  }
}
