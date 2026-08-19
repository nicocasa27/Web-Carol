/** Página «Las sesiones» — derivada de §4, §6, §7, §11 y §14. */

export const sesionesPage = {
  title: 'Cómo trabajamos juntos',
  lead: 'Un proceso completo, no una colección de sesiones sueltas. Esto es lo que ocurre, en qué orden y durante cuánto tiempo.',

  shape: {
    title: 'La forma del proceso',
    steps: [
      {
        label: 'Llamada de valoración',
        body: 'Una conversación para entender qué te trae y decidir, los dos, si este trabajo corresponde. Si no corresponde, se dice ahí mismo.',
      },
      {
        label: 'Sesión de trabajo',
        body: 'Investigación, interpretación e interrupción en una misma sesión. Termina con la grabación de tu audio.',
      },
      {
        label: 'Veintiún días',
        body: 'El audio se escucha cada noche. Es donde el cambio se consolida, y por eso no es opcional.',
      },
      {
        label: 'Tres sesiones y seguimiento',
        body: 'Después de tres sesiones consecutivas hay una sesión de seguimiento: se revisa lo que cambió, se ajusta y se afirma.',
      },
    ],
  },

  modality: {
    title: 'Detalles prácticos',
    items: [
      { term: 'Modalidad', description: 'En línea, con acompañamiento durante todo el proceso.' },
      { term: 'Idiomas', description: 'Español e inglés.' },
      { term: 'Dónde', description: 'México y cualquier país donde busques acompañamiento en línea.' },
      { term: 'Entre sesiones', description: 'El audio personalizado y el contacto directo para lo que surja.' },
    ],
  },

  evidence: {
    title: 'Cómo se sabe que funcionó',
    body: [
      'La evidencia no aparece durante la sesión. Aparece en la vida cotidiana, cuando situaciones que antes desbordaban se pueden atravesar con serenidad.',
      'Poner límites sin culpa. Decidir con más claridad. Dejar de sabotear oportunidades. Sentir coherencia entre lo que se piensa, lo que se siente y lo que se hace.',
    ],
    quotes: [
      'Es extraño. Antes esto me habría afectado muchísimo y ahora ya no me mueve igual.',
      'Sigo siendo yo, pero sin cargar ese peso que llevaba tantos años.',
    ],
    closing:
      'El indicador de éxito no es la desaparición de un síntoma. Es la aparición de otra manera de vivir.',
  },

  notFor: {
    title: 'Para quién no es',
    body: [
      'Este trabajo está diseñado para personas comprometidas con su propio proceso. No es un espacio para quien busca una solución inmediata, ni para quien prefiere delegar por completo la responsabilidad de su bienestar.',
      'Tampoco es el enfoque adecuado para quien no está dispuesto a mirar su historia con honestidad, cuestionar sus patrones y participar activamente en el cambio.',
      'Cuando alguien necesita un tipo de atención distinta, se comunica con claridad y se orienta hacia el profesional o el recurso que corresponda. La ética también es parte de la excelencia.',
    ],
  },
} as const;
