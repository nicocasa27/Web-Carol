/** Página «El método» — derivada de §8, §9, §10, §11 y §12. */

export const metodoPage = {
  eyebrowless: true,
  title: 'El método',
  lead: 'RTT es el punto de partida, no el destino. Lo que sigue describe qué es, qué se le integró y por qué el orden importa.',

  rtt: {
    title: 'Qué es RTT, dicho de la manera más simple',
    body: [
      'Rapid Transformational Therapy trabaja con el subconsciente para identificar y transformar las creencias profundas que dan origen a muchos patrones emocionales y de comportamiento.',
      'A diferencia de los enfoques que se ocupan de administrar el síntoma, RTT busca de dónde salió la creencia, por qué el cerebro la adoptó en su momento y cómo puede sustituirse por una interpretación más funcional.',
      'Durante la sesión se utiliza hipnosis: un estado natural de relajación profunda que facilita el acceso a recuerdos, asociaciones y aprendizajes guardados. Desde ahí la persona puede comprender el origen de aquello que ha condicionado su vida y empezar a resignificarlo.',
    ],
    formal: {
      label: 'Declaración formal',
      text: 'Es el sistema de acceso neuro-subconsciente estructurado dentro del modelo SYNAPTICA, diseñado para facilitar reconsolidación emocional y reorganización identitaria mediante intervención hipnótica clínica y neuroplasticidad dirigida.',
    },
  },

  approach: {
    title: 'Qué se le integró, y por qué',
    body: [
      'Cada proceso empieza escuchando la historia con la convicción de que todo síntoma tiene un propósito y de que detrás de cada comportamiento hay una lógica que merece comprenderse antes de intentar cambiarla.',
      'El trabajo consiste en identificar los patrones invisibles que mantienen vivo el problema, conectar los momentos de la historia personal que les dieron origen y acompañar la reconstrucción de una narrativa interna más coherente con quien la persona realmente es.',
      'Por eso SYNAPTICA no se define por las técnicas que usa. Cuando comprensión, experiencia emocional y evidencia convergen, el cambio deja de depender de la fuerza de voluntad.',
    ],
    disciplines: [
      { name: 'Hipnoterapia clínica (RTT)', role: 'acceso al origen de la creencia' },
      { name: 'Neurociencia y neuroplasticidad', role: 'consolidación de lo nuevo' },
      { name: 'Psicología', role: 'lectura de la historia y del síntoma' },
      { name: 'Coaching transformacional', role: 'traslado a la vida cotidiana' },
      { name: 'PraNeoHom', role: 'cuando el proceso pide una mirada integral' },
    ],
  },

  sequence: {
    follow:
      'Después de tres sesiones consecutivas hay una sesión de seguimiento: se revisa qué cambió, se ajusta lo que haga falta y se afirma lo alcanzado.',
  },

  nightsNote:
    'No es un complemento opcional del proceso. Es la parte del proceso donde el cambio se consolida.',

  difference: {
    title: 'Lo que lo hace distinto',
    body: [
      'No es una técnica más ni una combinación de todas. Es una manera de entender la transformación: las personas no necesitan acumular más información sobre su problema, necesitan acceder al origen de los patrones que lo mantienen.',
      'Ninguna intervención se repite igual, porque ninguna historia empieza en el mismo lugar. Y el acompañamiento no termina cuando termina la sesión: el proceso está diseñado para que el cambio se sostenga en el tiempo.',
    ],
  },
} as const;
