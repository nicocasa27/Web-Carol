/**
 * Página «Escuelas» — el protocolo de cinco semanas.
 *
 * Acordado en la junta del 29 de agosto de 2026. De esa conversación sólo
 * salen tres datos duros: que son **cinco semanas**, que el curso se llama
 * **«From I can't to I can»**, y que quiere empezar dando pláticas.
 *
 * Eso es lo que está escrito aquí. Las cinco semanas se declaran como
 * cinco huecos —misma técnica que los medios en content/media.ts— porque
 * inventar el contenido de un protocolo que se va a aplicar con menores en
 * un aula sería inventar material clínico. La estructura existe, dice qué
 * va dentro, y espera.
 */

export type Week = {
  readonly numeral: string;
  readonly label: string;
  /** Qué tiene que ocupar este lugar, dicho para quien lo va a escribir. */
  readonly pending: string;
};

export const escuelasPage = {
  title: 'From I can\'t to I can',
  lead: 'Un protocolo de cinco semanas para llevar al aula el mismo trabajo sobre el origen de las creencias — antes de que el patrón se vuelva historia.',

  why: {
    eyebrow: 'Por qué en la escuela',
    title: ['Las creencias que gobiernan una vida', 'casi siempre se instalan ahí.'],
    body: [
      'Nadie nace sintiéndose insuficiente o incapaz. Esas percepciones se aprenden temprano, casi siempre sin que nadie se dé cuenta, y desde el subconsciente empiezan a decidir qué se intenta y qué ni siquiera se intenta.',
      'Trabajar en la adolescencia no es prevención en abstracto: es intervenir mientras la narrativa todavía se está escribiendo, cuando cambiarla cuesta una fracción de lo que costará después.',
    ],
  },

  protocol: {
    eyebrow: 'La estructura',
    title: 'Cinco semanas, una por movimiento.',
    intro:
      'El protocolo sigue la misma secuencia que un proceso individual, repartida en sesiones grupales y adaptada al lenguaje y a los tiempos de un grupo escolar.',
    weeks: [
      { numeral: 'I', label: 'Semana uno', pending: 'Objetivo, dinámica y material de la primera sesión' },
      { numeral: 'II', label: 'Semana dos', pending: 'Objetivo, dinámica y material de la segunda sesión' },
      { numeral: 'III', label: 'Semana tres', pending: 'Objetivo, dinámica y material de la tercera sesión' },
      { numeral: 'IV', label: 'Semana cuatro', pending: 'Objetivo, dinámica y material de la cuarta sesión' },
      { numeral: 'V', label: 'Semana cinco', pending: 'Objetivo, dinámica y material de la quinta sesión' },
    ] satisfies readonly Week[],
    /** Se muestra en la interfaz mientras las cinco semanas estén vacías. */
    pendingNote:
      'El detalle de cada semana está en preparación. Si diriges una escuela y quieres conocerlo antes de que se publique, escríbeme y te lo comparto.',
  },

  talks: {
    eyebrow: 'Antes del protocolo',
    title: 'Pláticas para alumnos, docentes y familias.',
    body: [
      'El protocolo completo no es siempre el primer paso. Una plática abre la conversación, muestra cómo se trabaja y permite decidir con información si el programa corresponde a lo que esa comunidad necesita.',
    ],
  },

  invitation: {
    eyebrow: 'Para tu escuela',
    title: 'Hablemos de tu grupo antes de proponer nada.',
    body: 'Cada comunidad escolar llega con una historia distinta. La conversación empieza por escuchar la de la tuya.',
  },
} as const;
