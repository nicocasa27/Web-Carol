import Image from 'next/image';
import type { Media } from '@/content/media';

/**
 * Un medio del diseño, o el hueco que va a ocupar.
 *
 * Cuando el archivo existe pasa por el optimizador de Next: un teléfono
 * recibe una imagen de su ancho en AVIF o WebP en vez del JPEG de 1920 px
 * que necesita una pantalla grande. `sizes` es lo que decide eso, así que
 * cada uso declara el suyo — sin él el navegador asume el ancho completo
 * del viewport y se descarga de más.
 *
 * Cuando no existe, dibuja el bloque tonal que dice qué va dentro y con
 * qué especificación, con la caja ya reservada para que sustituirlo no
 * mueva el layout.
 *
 * Lo que este componente se niega a hacer: stock corporativo presentado
 * como real, servicios de imagen falsa, o el retrato de una persona que
 * no es ella.
 */
export function MediaFrame({
  item,
  className = '',
  priority = false,
  sizes = '100vw',
}: {
  item: Media;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const style = item.ratio ? { aspectRatio: item.ratio } : undefined;

  if (item.available && item.kind === 'image') {
    return (
      <div
        className={`relative h-full w-full overflow-hidden rounded-media ${className}`}
        style={style}
      >
        <Image
          src={item.file}
          alt={item.alt ?? ''}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  if (item.available && item.kind === 'video') {
    return (
      <video
        className={`w-full rounded-media ${className}`}
        style={style}
        controls
        preload="metadata"
        playsInline
        poster="/media/pelicula-poster.jpg"
      >
        <source src={item.file} type="video/mp4" />
      </video>
    );
  }

  return (
    <figure
      className={`flex h-full w-full flex-col justify-end overflow-hidden rounded-media bg-band ${className}`}
      style={style}
    >
      <figcaption className="flex flex-col gap-1 border-t border-rule bg-band/90 px-i2 py-i1">
        <span className="text-micro tracking-[2.4px] text-ink uppercase">{item.label}</span>
        <span className="text-micro text-ink-2">{item.spec}</span>
      </figcaption>
    </figure>
  );
}
