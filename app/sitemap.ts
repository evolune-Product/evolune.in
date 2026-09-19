import type { MetadataRoute } from 'next';
import { site, products } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const staticRoutes = ['', '/about', '/products', '/technology', '/projects', '/careers', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
