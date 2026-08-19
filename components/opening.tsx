import { Fragment } from 'react';
import { MediaFrame } from '@/components/media-frame';
import { LineBreak } from '@/components/section';
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
      <div className="eyebrow eyebrow-quiet sy-fade sy-step-1">
        {opening.eyebrow}
      </div>

      <h1
        id="apertura"
        className="type-display sy-fade sy-step-2 mt-i3 max-w-[15em] text-opening tracking-[-0.5px] max-sm:text-balance"
       
      >
        {opening.headline.map((line, index) => (
          <Fragment key={line}>
            {index > 0 ? <LineBreak /> : null}
            {line}
          </Fragment>
        ))}
      </h1>

      <p
        className="sy-fade sy-step-3 mt-i3 max-w-[34em] text-lead font-light text-ink-2 text-pretty"
       
      >
        {opening.sub.map((line, index) => (
          <Fragment key={line}>
            {index > 0 ? <LineBreak /> : null}
            {line}
          </Fragment>
        ))}
      </p>

      <div
        className="sy-fade sy-step-4 mt-block w-[min(var(--container-hero),92vw)]"
       
      >
        {/* Mientras no exista la pieza, la apertura la sostiene el póster.
            La marca de reproducción del diseño se retira hasta entonces:
            un botón de play que no reproduce nada es un control muerto. */}
        <div className="overflow-hidden rounded-media shadow-media">
          <MediaFrame
            item={media.film.available ? media.film : media.heroPoster}
            priority
            sizes="(min-width: 1104px) 1040px, 92vw"
          />
        </div>
      </div>

      <div
        className="sy-fade sy-step-5 mt-stack flex flex-col items-center gap-i2 pb-[56px]"
       
      >
        <p className="text-micro tracking-[2.4px] text-ink-2 uppercase">{opening.scrollHint}</p>
        {!isBookingLive && !isEmailLive ? (
          <p className="max-w-[30em] text-micro text-ink-2">{booking.pendingLong}</p>
        ) : null}
      </div>
    </section>
  );
}
