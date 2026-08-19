import { ImageResponse } from 'next/og';
import { brand } from '@/content/brand';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${brand.name} — ${brand.tagline}`;

/**
 * Tarjeta social. Los colores son los tokens reales (petróleo, marfil,
 * salmón); la tipografía es la que trae el renderizador, porque incrustar
 * Newsreader aquí exigiría un binario en el repo. Se sustituye cuando
 * exista la fotografía. Ver README, «Pendientes».
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#22363a',
          color: '#f2eee7',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, letterSpacing: 8, color: '#e0987d' }}>
          {brand.name}
        </div>
        <div style={{ display: 'flex', fontSize: 58, lineHeight: 1.2, maxWidth: 880 }}>
          {brand.tagline}
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#b8bab7' }}>
          Sesiones en línea · español e inglés
        </div>
      </div>
    ),
    size
  );
}
