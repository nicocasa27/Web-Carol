import { Fragment } from 'react';
import { MediaFrame } from '@/components/media-frame';
import { LineBreak, Emphasized } from '@/components/section';
import { media } from '@/content/media';
import { opening } from '@/content/home';
import { isBookingLive, isEmailLive, booking, methodDescriptor } from '@/content/brand';

/**
 * La apertura: etiqueta, frase, subtítulo y el video, cada uno entrando
 * escalonado. Es animación CSS pura, sin observer: la frase no depende de
 * que llegue un script.
 *
 * Tras la junta la apertura se abrió con la firma de Carol y una
 * pregunta; en la revisión de la sección 1 ella prefirió volver a esta
 * frase, y que su nombre viva sólo en la barra.
 */
export function Opening() {
  return (
    <section
      id="inicio"
      aria-labelledby="apertura"
      /* El aire de arriba se mide desde el borde de la barra, no desde
         el borde de la página: la barra es fija y se comía la mitad del
         `pt-hero`, con lo que en un teléfono la etiqueta quedaba a 32 px
         del menú. Carol lo pidió «muy aireado». */
      className="flex flex-col items-center px-6 pt-[calc(var(--spacing-nav)+clamp(56px,7vw,104px))] text-center"
    >
      {/* El nombre del trabajo vive aquí y no debajo de la marca en la
          barra: es lo que alguien pregunta la primera vez que llega, no
          algo que necesite repetirse en todas las pantallas de todas las
          páginas. Y son cuarenta y tantos caracteres en versalitas: bajo
          el nombre, en un teléfono, no caben en una línea. */}
      {/* Tiene que caber en un renglón también en un teléfono, y son
          cuarenta caracteres. Lo que lo ensanchaba no era el cuerpo sino
          la separación entre letras: a 3.2 px fijos se come un tercio del
          ancho. En `em` encoge con la letra, y el cuerpo baja de 12 a
          11 px en pantalla pequeña. */}
      <div className="eyebrow eyebrow-quiet sy-fade sy-step-1 text-[clamp(10px,2.8vw,12px)] tracking-[0.12em] whitespace-nowrap">
        {methodDescriptor}
      </div>

      <h1
        id="apertura"
        className="type-display sy-fade sy-step-2 mt-[clamp(52px,8vw,104px)] max-w-[15em] text-opening tracking-[-0.5px] max-sm:text-balance"
      >
        {opening.headline.map((line, index) => (
          <Fragment key={line}>
            {index > 0 ? <LineBreak /> : null}
            <Emphasized text={line} />
          </Fragment>
        ))}
      </h1>

      {/* El párrafo también en Didot, como pidió Carol. Va un punto más
          grande que el cuerpo normal —21-24 px en vez de 16-19— porque
          los trazos finos de una didona a tamaño de texto se quedan en un
          hilo; es la misma razón por la que subió la cita de «La idea». */}
      {/* En la sans y no en Didot: Carol probó la didona y prefirió la
          letra de contraste, la misma del menú —«transmite mejor»—. Y un
          punto más pequeña, para que el titular respire y el bloque no se
          amontone con la etiqueta de arriba. */}
      <p className="sy-fade sy-step-3 mt-[clamp(44px,6vw,80px)] max-w-[34em] text-lead font-light text-ink-2 text-pretty">
        {opening.sub.map((line, index) => (
          <Fragment key={line}>
            {index > 0 ? <LineBreak /> : null}
            {line}
          </Fragment>
        ))}
      </p>

      <div className="sy-fade sy-step-4 mt-major w-[min(var(--container-hero),92vw)]">
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

      <div className="sy-fade sy-step-5 mt-stack flex flex-col items-center gap-i2 pb-[56px]">
        <p className="type-utility text-micro tracking-[2.4px] text-ink-2 uppercase">{opening.scrollHint}</p>
        {!isBookingLive && !isEmailLive ? (
          <p className="max-w-[30em] text-micro text-ink-2">{booking.pendingLong}</p>
        ) : null}
      </div>
    </section>
  );
}
