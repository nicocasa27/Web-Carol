import type { Metadata } from 'next';
import { LegalDocument } from '@/components/legal-document';
import { legalDocs } from '@/content/legal';

const doc = legalDocs.testimonios;

export const metadata: Metadata = {
  title: doc.title,
  description: doc.lead,
  robots: { index: false, follow: true },
};

export default function TestimoniosPage() {
  return <LegalDocument doc={doc} />;
}
