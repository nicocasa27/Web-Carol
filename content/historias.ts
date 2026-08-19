/**
 * Página «Historias» — derivada de §13.
 *
 * ⚠ BLOQUEANTE ANTES DE PUBLICAR: el caso viene de la toma de
 * requerimientos, pero la autorización explícita de la persona para
 * publicarlo sigue pendiente (§08 de la propuesta). Está anonimizado —sin
 * edad, sin lugar, sin oficio, sin ningún dato que permita reconocerlo—
 * pero eso no sustituye el consentimiento. Ver README, «Pendientes».
 */

export const consentPending = true;

export const historiasPage = {
  title: 'Historias de transformación',
  lead: 'Un solo caso, narrado completo. Sin sensacionalismo y sin un detalle que permita reconocer a quien lo vivió.',

  story: {
    title: 'El padre que puso distancia para proteger',
    blocks: [
      {
        label: 'Motivo de consulta',
        body: 'Duelo y ansiedad crónica. Años de desconexión con sus hijos y una culpa persistente por haber estado ausente durante la crianza. Tristeza, vergüenza, rasgos depresivos. Procrastinación, relaciones destructivas, atracones, inestabilidad laboral.',
      },
      {
        label: 'La historia debajo del síntoma',
        body: 'He sido un mal padre. Abandoné a mis hijos. Nunca voy a ser amado. Soy tan malo como mis padres. Cuatro frases que llevaba décadas repitiéndose, y que él daba por descripciones de la realidad.',
      },
      {
        label: 'Lo que apareció en el proceso',
        body: 'La distancia con sus hijos no había sido abandono. Había sido un intento de mantenerlos a salvo de lo que él temía llegar a ser: un acto enorme de amor, ejecutado de la única manera que sabía. Y la culpa no venía de lo que hacía o dejaba de hacer en el presente, sino de la impotencia de no haber podido protegerse a sí mismo cuando era pequeño.',
      },
      {
        label: 'Qué cambió después',
        body: 'Recuperó la calma frente a situaciones que antes detonaban ansiedad. Pudo poner límites sin culpa. Retomó proyectos pospuestos durante años y volvió a presentarse a entrevistas de trabajo. Sus relaciones cambiaron de calidad, y su familia lo notó antes que él.',
      },
    ],
    closing: 'Hoy ya no vive intentando demostrar su valor. Vive convencido de que ya lo tiene.',
  },

  note: 'Los procesos son distintos entre sí y ninguno predice a otro. Este caso se publica porque muestra cómo se trabaja, no lo que se promete.',
} as const;
