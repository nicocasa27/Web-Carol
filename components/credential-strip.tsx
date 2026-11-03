import Image from 'next/image';
import {
  ownCredentials,
  ownCredentialsLabel,
  trainingAccreditors,
  trainingAccreditorsLabel,
  type Credential,
} from '@/content/credentials';

/**
 * Credenciales, al pie de «Quién acompaña».
 *
 * Dos niveles, a propósito. Arriba, sus certificaciones: son de ella y se
 * ven. Abajo, más pequeñas y más tenues, las organizaciones que acreditan
 * la formación RTT, con un rótulo que dice exactamente eso — no que ella
 * sea miembro de todas. Ver content/credentials.ts.
 *
 * Estáticas, no en carrusel: una cinta que se mueve sola pide atención
 * que no se ganó y esconde la mitad de los logos en cada momento. Todas
 * teñidas en la tinta del sitio, para que se lean como una sola línea de
 * respaldo y no como once marcas compitiendo.
 */
export function CredentialStrip() {
  return (
    <div className="flex flex-col items-center gap-i3 border-t border-rule pt-i3 text-center">
      <div className="flex flex-col items-center gap-i2">
        <p className="eyebrow eyebrow-quiet">{ownCredentialsLabel}</p>
        <ul className="flex flex-wrap items-center justify-center gap-i3">
          {ownCredentials.map((credential) => (
            <li key={credential.name}>
              <Logo credential={credential} />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center gap-i2">
        <p className="type-utility text-micro tracking-[1.6px] text-ink-2">{trainingAccreditorsLabel}</p>
        <ul className="flex max-w-[860px] flex-wrap items-center justify-center gap-x-i3 gap-y-i2 opacity-55">
          {trainingAccreditors.map((credential) => (
            <li key={credential.name}>
              <Logo credential={credential} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Logo({ credential }: { credential: Credential }) {
  const width = Math.round((credential.width / credential.height) * credential.displayHeight);
  return (
    <Image
      src={credential.file}
      alt={credential.name}
      title={credential.name}
      width={credential.width}
      height={credential.height}
      sizes={`${width}px`}
      style={{ height: credential.displayHeight, width }}
    />
  );
}
