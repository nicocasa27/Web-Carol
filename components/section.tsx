import type { ReactNode } from 'react';

const tones = {
  ground: 'bg-ground text-ink',
  band: 'bg-band text-ink',
  deep: 'on-deep bg-deep text-deep-ink',
} as const;

const widths = {
  wide: 'max-w-wide',
  deep: 'max-w-deep',
  invite: 'max-w-invite',
  narrow: 'max-w-narrow',
} as const;

/**
 * El chasis de sección del diseño: fondo, respiración vertical y ancho
 * máximo. El ritmo vive aquí y no repartido por las páginas, para que no
 * se pueda desafinar sección por sección.
 */
export function Section({
  children,
  tone = 'ground',
  width = 'wide',
  id,
  labelledBy,
  className = '',
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  width?: keyof typeof widths;
  id?: string;
  labelledBy?: string;
  className?: string;
}) {
  const pad = tone === 'deep' ? 'py-section-deep' : 'py-section';
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tones[tone]} ${pad} px-gutter ${className}`}
    >
      <div className={`mx-auto ${widths[width]}`}>{children}</div>
    </section>
  );
}

/** La etiqueta versalita del diseño. Una sola definición para todo el sitio. */
export function Eyebrow({
  children,
  quiet = false,
}: {
  children: ReactNode;
  quiet?: boolean;
}) {
  return <div className={`eyebrow${quiet ? ' eyebrow-quiet' : ''}`}>{children}</div>;
}

/** Título de sección: Cormorant 300, dos líneas, un solo tamaño en el sitio. */
export function SectionTitle({
  lines,
  id,
  className = '',
}: {
  lines: readonly string[] | string;
  id?: string;
  className?: string;
}) {
  const rows = typeof lines === 'string' ? [lines] : lines;
  return (
    <h2 id={id} className={`type-display text-title ${className}`}>
      {rows.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </h2>
  );
}

/** Cuerpo largo. La medida y el interlineado vienen del sistema. */
export function Prose({
  paragraphs,
  tone = 'ink',
  className = '',
}: {
  paragraphs: readonly string[];
  tone?: 'ink' | 'deep';
  className?: string;
}) {
  const color = tone === 'deep' ? 'text-deep-ink-2' : 'text-ink-2';
  return (
    <div className={`flex max-w-measure flex-col gap-i2 text-body ${color} ${className}`}>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 32)}>{p}</p>
      ))}
    </div>
  );
}

/**
 * Encabezado de las lecturas profundas. La barra es fija, así que el
 * primer bloque de cada página interna reserva su alto.
 */
export function PageHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <section className="bg-ground px-gutter pt-[calc(var(--spacing-nav)+var(--spacing-block))] pb-section">
      <div className="mx-auto flex max-w-measure flex-col gap-i2">
        <h1 className="type-display text-title text-balance">{title}</h1>
        <p className="text-lead text-ink-2 text-pretty">{lead}</p>
      </div>
    </section>
  );
}
