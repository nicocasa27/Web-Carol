import Link from 'next/link';
import { Section, SectionTitle } from '@/components/section';

export default function NotFound() {
  return (
    <Section width="narrow">
      <div className="flex flex-col items-start gap-i2 pt-nav">
        <SectionTitle lines="Esta página no existe." />
        <p className="max-w-measure text-lead text-ink-2 text-pretty">
          Puede que el enlace haya cambiado. Desde el inicio se llega a todo lo
          que hay publicado.
        </p>
        <Link href="/" className="link-read text-small">
          Volver al inicio
        </Link>
      </div>
    </Section>
  );
}
