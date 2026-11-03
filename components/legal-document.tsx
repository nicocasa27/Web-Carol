import Link from 'next/link';
import type { ReactNode } from 'react';
import { Section, PageHeader } from '@/components/section';
import { reviewNotice, type LegalBlock, type LegalDoc } from '@/content/legal';

/**
 * Un documento legal.
 *
 * Los campos que la plantilla de RTT deja en blanco se marcan en el
 * contenido con `[[…]]` y aquí se pintan como pendientes, a la vista. No se
 * esconden ni se rellenan: la página existe para que Carol la revise, y un
 * hueco que no se ve es un hueco que nadie completa.
 */
export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHeader title={doc.title} lead={doc.lead} />

      <Section width="narrow" flushTop>
        <div className="flex max-w-measure flex-col gap-i2">
          {doc.status === 'review' ? (
            <aside
              aria-label={reviewNotice.label}
              className="flex flex-col gap-1 rounded-card bg-band p-i2"
            >
              <p className="type-utility text-micro tracking-[2.4px] text-accent-ink uppercase">
                {reviewNotice.label}
              </p>
              <p className="text-small text-ink-2">
                {reviewNotice.body}{' '}
                <span className="whitespace-nowrap">Base: {doc.source}.</span>
              </p>
            </aside>
          ) : null}

          <div className="flex flex-col gap-i2 text-body font-light text-ink-2">
            {doc.blocks.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case 'h':
      return <h2 className="type-display mt-i2 text-quote text-ink">{block.text}</h2>;
    case 'p':
      return <p>{inline(block.text)}</p>;
    case 'ul':
      return (
        <ul className="flex list-disc flex-col gap-i1 pl-5 marker:text-accent-ink">
          {block.items.map((item) => (
            <li key={item.slice(0, 40)}>{inline(item)}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol
          start={block.start}
          className="flex list-decimal flex-col gap-i1 pl-6 marker:text-accent-ink"
        >
          {block.items.map((item) => (
            <li key={item.slice(0, 40)}>{inline(item)}</li>
          ))}
        </ol>
      );
  }
}

/** `[[pendiente]]` y `[texto](/ruta)` dentro de un párrafo. */
function inline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /\[\[(.+?)\]\]|\[([^\]]+)\]\((\/[^)]*)\)/g;
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const at = match.index ?? 0;
    if (at > last) parts.push(text.slice(last, at));
    if (match[1]) {
      parts.push(
        <mark
          key={at}
          className="rounded-[4px] bg-accent/25 px-1 text-ink [box-decoration-break:clone]"
        >
          <span className="type-utility text-micro tracking-[1.6px] uppercase">
            {reviewNotice.pendingLabel}:
          </span>{' '}
          {match[1]}
        </mark>
      );
    } else {
      parts.push(
        <Link key={at} href={match[3]} className="link-read">
          {match[2]}
        </Link>
      );
    }
    last = at + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
