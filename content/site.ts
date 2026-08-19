/**
 * La URL pública del sitio, en un solo lugar.
 *
 * Orden de preferencia:
 *   1. NEXT_PUBLIC_SITE_URL — el dominio real, cuando exista.
 *   2. El dominio de producción del proyecto en Vercel.
 *   3. La URL de este deployment concreto (previews).
 *   4. localhost, en desarrollo.
 *
 * Sin esto, los metadatos, el sitemap y la tarjeta social de un preview
 * apuntarían a localhost, que es la clase de detalle que sólo se descubre
 * cuando alguien comparte el enlace.
 */
const fromVercel = (value: string | undefined) =>
  value ? `https://${value}` : undefined;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  fromVercel(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  fromVercel(process.env.VERCEL_URL) ??
  'http://localhost:3000';

/**
 * El sitio sólo se abre a los buscadores cuando alguien ha declarado su
 * dominio real en NEXT_PUBLIC_SITE_URL.
 *
 * La regla no es «estoy en producción», que es lo que parece obvio: el
 * primer deployment de Vercel ya es producción, y hasta entonces esto vive
 * en una URL `.vercel.app` provisional que carga un caso clínico todavía
 * sin autorización. Indexar eso sería publicarlo de verdad, y en una
 * dirección que además hay que abandonar después. Con el dominio puesto,
 * se abre solo.
 */
export const isIndexable =
  Boolean(process.env.NEXT_PUBLIC_SITE_URL) && process.env.VERCEL_ENV !== 'preview';
