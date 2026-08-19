import type { Media } from '@/content/media';

/**
 * El hueco de un medio que todavía no existe — el equivalente del
 * `<image-slot>` del diseño.
 *
 * Dibuja el bloque tonal con el radio del diseño y dice qué va dentro y
 * con qué especificación. Reserva desde ahora la caja final, para que
 * sustituir el archivo no mueva el layout.
 *
 * Lo que este componente se niega a hacer: stock corporativo, servicios de
 * imagen falsa, o el retrato de una persona que no es ella.
 */
export function MediaFrame({
  item,
  className = '',
  priority = false,
  rounded = true,
}: {
  item: Media;
  className?: string;
  priority?: boolean;
  /** El mockup de "Quién acompaña" prueba la foto a sangre completa, sin el radio del diseño. */
  rounded?: boolean;
}) {
  const box = `${rounded ? 'rounded-media' : ''} ${className}`;
  const style = item.ratio ? { aspectRatio: item.ratio } : undefined;

  if (item.available && item.kind === 'image') {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- assets estáticos ya dimensionados; sin optimizador en un sitio exportado
      <img
        src={item.file}
        alt={item.alt ?? ''}
        className={`${box} h-full w-full object-cover`}
        style={style}
        width={item.width}
        height={item.height}
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    );
  }

  if (item.available && item.kind === 'video') {
    return (
      <video
        className={`${box} w-full`}
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
      className={`${box} relative flex h-full w-full flex-col justify-end overflow-hidden bg-band`}
      style={style}
    >
      <figcaption className="z-10 flex flex-col gap-1 border-t border-rule bg-band/90 px-i2 py-i1">
        <span className="text-micro tracking-[2.4px] text-ink uppercase">{item.label}</span>
        <span className="text-micro text-ink-2">{item.spec}</span>
      </figcaption>
    </figure>
  );
}
