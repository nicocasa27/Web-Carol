/**
 * Manifiesto de medios.
 *
 * Los tres huecos del diseño (`image-slot`) más la pieza de video.
 *
 * ⚠ LAS TRES IMÁGENES SON PROVISIONALES. Son fotografías de banco con
 * licencia Pexels, elegidas para que la página se pueda enseñar completa
 * mientras no exista el material propio. No son de SYNAPTICA, no son de
 * ella y no pueden publicarse como si lo fueran. Los créditos están en
 * `public/media/README.md`.
 *
 * El retrato se eligió de espaldas a propósito: la licencia de Pexels
 * prohíbe usar personas identificables de forma que sugiera que respaldan
 * algo, y una cara desconocida en la sección «Quién acompaña» diría que
 * esa persona es la terapeuta. De espaldas sostiene la composición sin
 * afirmar nada falso.
 *
 * Para sustituir una: deja el archivo con el mismo nombre en
 * public/media/ y quita `provisional: true`. Nada más cambia — la caja
 * ya está reservada.
 */

export type Media = {
  readonly id: string;
  readonly file: string;
  readonly kind: 'video' | 'image';
  /** Proporción CSS ('16 / 9') o `null` cuando la caja manda la altura. */
  readonly ratio: string | null;
  /** Dimensiones reales del archivo, para que el navegador no salte. */
  readonly width?: number;
  readonly height?: number;
  /** El texto del slot en el diseño. */
  readonly label: string;
  /** La especificación que se le pasa a producción. */
  readonly spec: string;
  readonly available: boolean;
  /** Foto de banco de paso: hay que reemplazarla antes de publicar. */
  readonly provisional?: boolean;
  readonly credit?: string;
  readonly creditUrl?: string;
  /** Etiqueta funcional, no descripción de la foto. */
  readonly alt?: string;
};

export const media = {
  film: {
    id: 'film',
    file: '/media/pelicula.mp4',
    kind: 'video',
    ratio: '16 / 9',
    label: 'Pieza cinematográfica',
    spec: '90–150 s · 16:9 · 1080p mínimo (4K preferible) · H.264 · subtítulos .srt es/en',
    available: false,
  },
  heroPoster: {
    id: 'heroPoster',
    file: '/media/pelicula-poster.jpg',
    kind: 'image',
    ratio: '16 / 9',
    width: 1920,
    height: 1080,
    label: 'Póster del video',
    spec: 'Fotograma fijo en alta resolución · debe sostenerse solo',
    available: true,
    provisional: true,
    credit: 'Olga Lioncat · Pexels',
    creditUrl: 'https://www.pexels.com/photo/7245223/',
    alt: 'Sombras de árboles proyectadas sobre un muro claro a última hora de la tarde',
  },
  idea: {
    id: 'idea',
    file: '/media/naturaleza.jpg',
    kind: 'image',
    ratio: null,
    width: 1200,
    height: 1600,
    label: 'Fotografía',
    spec: 'Naturaleza y luz orgánica · vertical · profundidad de campo',
    available: true,
    provisional: true,
    credit: 'Petra Kopaskova · Pexels',
    creditUrl: 'https://www.pexels.com/photo/5630207/',
    alt: '',
  },
  portrait: {
    id: 'portrait',
    file: '/media/retrato.jpg',
    kind: 'image',
    ratio: null,
    width: 1200,
    height: 1600,
    label: 'Retrato editorial',
    spec: 'Luz natural · presencia antes que perfección',
    available: true,
    provisional: true,
    credit: 'Karola G · Pexels',
    creditUrl: 'https://www.pexels.com/photo/6633814/',
    alt: 'Una persona de espaldas frente a una ventana con luz natural',
  },
} as const satisfies Record<string, Media>;
