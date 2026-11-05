/**
 * Certificaciones de Carol y organizaciones que acreditan la formación RTT.
 *
 * Son DOS cosas distintas y la página las separa a propósito:
 *
 * 1. `ownCredentials` — certificaciones de ella: RTT Practitioner y el
 *    sello C. Hyp. de Rapid Transformational Therapy. Van en primer plano.
 *
 * 2. `trainingAccreditors` — organizaciones que acreditan los cursos de
 *    RTT. Según «RTT Accreditation and Membership», acreditan el programa
 *    (RTT Live In-Person y Live Online) y el practitioner PUEDE afiliarse a
 *    cada una por su cuenta; el uso del logo suele ser un beneficio de esa
 *    membresía. Ponerlas en fila junto a su nombre sin decir nada daría a
 *    entender que Carol pertenece a todas. Por eso van en segundo plano y
 *    con un rótulo que dice exactamente lo que son.
 *
 * PENDIENTE DE CONFIRMAR con Carol antes de publicar:
 * - Que su formación fue RTT Live In-Person o Live Online (las
 *   acreditaciones sólo cubren esos formatos).
 * - Que RTT permite a sus practitioners mostrar estos logos.
 * - Si es miembro de alguna: esa pasa a ser credencial propia.
 *
 * NBVH y ASCH se añadieron a petición de Carol («faltan algunos más»),
 * pero son las dos con más riesgo: NBVH acredita sólo la formación
 * presencial y exige un curso adicional en Países Bajos, y el propio logo
 * de ASCH dice «RTT Live In-Person Only». Si su formación fue en línea,
 * esas dos tienen que salir.
 *
 * Los archivos están recortados del PDF «Logos RTT Avaladoras», sin
 * fondo y teñidos en la tinta del sitio: en su color original once logos
 * compiten entre sí y con la página.
 */

export type Credential = {
  /** Nombre oficial: es el texto alternativo. */
  readonly name: string;
  readonly file: string;
  /** Dimensiones del archivo, para reservar la caja sin saltos. */
  readonly width: number;
  readonly height: number;
  /**
   * Alto de presentación en px. Los logotipos anchos se ven más grandes
   * que los sellos redondos a la misma altura; se compensa aquí para que
   * la fila pese parejo.
   */
  readonly displayHeight: number;
};

export const ownCredentialsLabel = 'Certificación';

export const ownCredentials: readonly Credential[] = [
  {
    name: 'Rapid Transformational Therapy — Practitioner certificado',
    file: '/credentials/rtt-practitioner.png',
    width: 328,
    height: 328,
    displayHeight: 88,
  },
  {
    name: 'Rapid Transformational Therapy — C. Hyp. (hipnoterapeuta certificada)',
    file: '/credentials/rtt-chyp.png',
    width: 327,
    height: 327,
    displayHeight: 88,
  },
  /**
   * RTT for Schools, añadido el 3 de noviembre. Es el sello que respalda
   * «RTT School Programs», el protocolo escolar. El original es turquesa; va
   * recortado, cuadrado y teñido en la tinta del sitio como los otros
   * doce, para que la fila no se convierta en tres colores distintos.
   */
  {
    name: 'RTT for Schools',
    file: '/credentials/rtt-schools.png',
    width: 328,
    height: 328,
    displayHeight: 88,
  },
];

export const trainingAccreditorsLabel = 'La formación RTT® está acreditada por';

export const trainingAccreditors: readonly Credential[] = [
  { name: 'General Hypnotherapy Register (GHR)', file: '/credentials/ghr.png', width: 181, height: 76, displayHeight: 26 },
  { name: 'Accredited Counsellors, Coaches, Psychotherapists and Hypnotherapists (ACCPH)', file: '/credentials/accph.png', width: 269, height: 80, displayHeight: 30 },
  { name: 'International Institute for Complementary Therapists (IICT)', file: '/credentials/iict.png', width: 240, height: 55, displayHeight: 24 },
  { name: 'International Association of Counselors & Therapists (IACT)', file: '/credentials/iact.png', width: 81, height: 85, displayHeight: 38 },
  { name: 'New Zealand Association of Professional Hypnotherapists (NZAPH)', file: '/credentials/nzaph.png', width: 283, height: 84, displayHeight: 28 },
  { name: 'International Hypnosis Federation (IHF)', file: '/credentials/ihf.png', width: 84, height: 85, displayHeight: 38 },
  { name: 'International Hypnosis Association (IHA)', file: '/credentials/iha.png', width: 79, height: 82, displayHeight: 38 },
  { name: 'International Coaches Register (ICR)', file: '/credentials/icr.png', width: 78, height: 80, displayHeight: 38 },
  { name: 'Nederlandse Beroepsvereniging van Hypnotherapeuten (NBVH)', file: '/credentials/nbvh.png', width: 217, height: 112, displayHeight: 40 },
  { name: 'Australian Society of Clinical Hypnotherapists (ASCH)', file: '/credentials/asch.png', width: 250, height: 61, displayHeight: 28 },
];
