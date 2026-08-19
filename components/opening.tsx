import { MediaFrame } from '@/components/media-frame';
import { media } from '@/content/media';
import { opening } from '@/content/home';
import { isBookingLive, isEmailLive, booking } from '@/content/brand';

/**
 * La apertura del diseño: etiqueta, frase, subtítulo y el video, cada uno
 * entrando escalonado. Es animación CSS pura, sin observer: la frase no
 * depende de que llegue un script.
 */
export function Opening() {
  return (
    <section
      id="inicio"
      aria-labelledby="apertura"
      className="flex flex-col items-center px-6 pt-hero text-center"
    >
      <div className="eyebrow eyebrow-quiet sy-fade" style={{ '--fade-delay': '0.15s' } as React.CSSProperties}>
        {opening.eyebrow}
      </div>

      <h1
        id="apertura"
        className="type-display sy-fade mt-i3 max-w-[15em] text-opening tracking-[-0.5px]"
        style={{ '--fade-delay': '0.45s' } as React.CSSProperties}
      >
        {opening.headline.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>

      <p
        className="sy-fade mt-i3 max-w-[34em] text-lead font-light text-ink-2"
        style={{ '--fade-delay': '0.85s' } as React.CSSProperties}
      >
        {opening.sub.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>

      <div
        className="sy-fade mt-block w-[min(var(--container-hero),92vw)]"
        style={{ '--fade-delay': '1.2s' } as React.CSSProperties}
      >
        {/* Mientras no exista la pieza, la apertura la sostiene el póster.
            La marca de reproducción del diseño se retira hasta entonces:
            un botón de play que no reproduce nada es un control muerto. */}
        <div className="overflow-hidden rounded-media shadow-media">
          <MediaFrame item={media.film.available ? media.film : media.heroPoster} priority />
        </div>
      </div>

      <div
        className="sy-fade mt-stack flex flex-col items-center gap-i2 pb-[56px]"
        style={{ '--fade-delay': '1.8s' } as React.CSSProperties}
      >
        <p className="text-micro tracking-[2.4px] text-ink-2 uppercase">{opening.scrollHint}</p>
        {!isBookingLive && !isEmailLive ? (
          <p className="max-w-[30em] text-micro text-ink-2">{booking.pendingLong}</p>
        ) : null}
      </div>
    </section>
  );
}
