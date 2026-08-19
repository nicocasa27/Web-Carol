import type { MetadataRoute } from 'next';
import { brand } from '@/content/brand';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.name,
    short_name: brand.name,
    description: brand.description,
    lang: brand.locale,
    start_url: '/',
    display: 'standalone',
    background_color: '#fbf9f5',
    theme_color: '#22363a',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
