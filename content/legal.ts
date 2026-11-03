/**
 * Documentos legales.
 *
 * Acordado en la junta del 29 de agosto: viven en subpágina y se enlazan
 * desde el pie, sin saturar la interfaz principal.
 *
 * Fuente: las cuatro plantillas que RTT entrega a sus practitioners, en
 * inglés. Aquí están traducidas al español con el nombre de Carol puesto.
 *
 * Todo lo que la plantilla deja en blanco o trae como ejemplo —montos,
 * plazos, horario, forma de almacenar los datos, país cuya ley aplica— va
 * marcado con `[[…]]` y la interfaz lo muestra como pendiente. No se
 * inventa: un término legal inventado afirma compromisos que nadie revisó
 * y que ella tendría que sostener frente a un paciente.
 *
 * Sintaxis dentro de los textos:
 *   [[descripción]]    campo pendiente de confirmar
 *   [texto](/ruta)     enlace interno
 */

export type LegalBlock =
  | { readonly kind: 'h'; readonly text: string }
  | { readonly kind: 'p'; readonly text: string }
  | { readonly kind: 'ul'; readonly items: readonly string[] }
  | { readonly kind: 'ol'; readonly items: readonly string[]; readonly start?: number };

export type LegalDoc = {
  readonly slug: string;
  readonly title: string;
  readonly lead: string;
  /** La plantilla de RTT de la que sale. */
  readonly source: string;
  /**
   * `review` mientras Carol no haya aprobado la traducción y completado
   * los campos pendientes; la página lo dice en un aviso visible.
   */
  readonly status: 'review' | 'final';
  readonly blocks: readonly LegalBlock[];
};

const privacidad: LegalDoc = {
  slug: 'aviso-de-privacidad',
  title: 'Aviso de privacidad',
  lead: 'Qué datos recojo durante un proceso terapéutico, para qué los uso, cómo los guardo y cuánto tiempo.',
  source: 'RTT Privacy Statement Template',
  status: 'review',
  blocks: [
    { kind: 'p', text: 'Este aviso explica qué datos recojo de ti y qué hago con ellos.' },

    { kind: 'h', text: 'Quién es responsable de tus datos' },
    { kind: 'p', text: 'Carol Leyva. [[nombre legal completo y domicilio del responsable — la ley mexicana los exige y la plantilla no los incluye]]' },

    { kind: 'h', text: 'Qué datos guardo y por qué los necesito' },
    {
      kind: 'ul',
      items: [
        'Nombre y edad: información básica que me ayuda a conocerte.',
        'Domicilio, correo electrónico y teléfono: los uso para comunicarme contigo sobre tus sesiones. Normalmente uso el medio por el que me contactaste primero; si no logro localizarte, intento por otro.',
        'Datos de un familiar cercano o de tu médico: si me preocupara que estés en riesgo, podría necesitar contactarlos, si es posible. Te avisaré si voy a hacerlo y cuándo.',
        'Notas de sesión: guardo notas breves de nuestras sesiones. [[cómo se guardan las notas de sesión]]',
      ],
    },

    { kind: 'h', text: 'Si comparto tus datos, con quién y para qué' },
    { kind: 'p', text: 'Es muy poco probable que comparta tus datos. No los vendo ni los uso con fines poco éticos. Podría tener que compartirlos si un tribunal requiere mis notas, o si tú o alguien de quien me hables está en riesgo de sufrir daño. También puedo comentar tu caso en supervisión, usando únicamente tu nombre de pila.' },

    { kind: 'h', text: 'Cómo guardo tus datos' },
    { kind: 'p', text: '[[dónde y cómo se almacenan los datos, y quién tiene acceso — la plantilla sólo trae un texto de ejemplo]]' },

    { kind: 'h', text: 'Cuánto tiempo los conservo y cómo los elimino' },
    { kind: 'p', text: 'Conservo tus datos y tus notas de sesión durante el tiempo que exige mi aseguradora: [[plazo de conservación — la plantilla indica 7 años]]. Pasado ese plazo, destruyo cualquier documento con tus datos personales y borro tu número de mi teléfono.' },

    { kind: 'h', text: 'Tus derechos' },
    { kind: 'p', text: '[[cómo ejercer los derechos de acceso, rectificación, cancelación y oposición — la ley mexicana los exige y la plantilla no los incluye]]' },

    { kind: 'h', text: 'Tu consentimiento' },
    { kind: 'p', text: 'Antes de empezar te pediré que confirmes por escrito si aceptas que use tus datos de esta forma.' },
  ],
};

const terminos: LegalDoc = {
  slug: 'terminos',
  title: 'Términos y condiciones',
  lead: 'Las condiciones del acompañamiento. Al agendar una sesión las aceptas; si no estás de acuerdo con ellas, te pido que no agendes.',
  source: 'Client Terms & Conditions (RTT)',
  status: 'review',
  blocks: [
    { kind: 'p', text: 'Estos términos y condiciones aplican a mis servicios profesionales. Al agendar una cita aceptas lo que sigue. Si no puedes o no quieres aceptarlo, no agendes ni continúes con tu proceso terapéutico.' },

    { kind: 'h', text: 'Consulta inicial sin costo' },
    { kind: 'p', text: 'Puede ofrecerse una consulta inicial en línea, sin costo, de 20 minutos. Durante esa llamada no se da terapia.' },
    { kind: 'p', text: 'El propósito de la consulta inicial es [[propósito de la consulta inicial]]. En ella se estima cuántas sesiones podría requerir tu motivo de consulta, con base en la información disponible en ese momento. Las estimaciones son orientativas y pueden cambiar.' },

    { kind: 'h', text: 'Reserva y pago' },
    { kind: 'p', text: 'Sesiones presenciales: al reservar tu primera sesión presencial se paga un anticipo no reembolsable de [[monto y moneda del anticipo]]. El resto debe pagarse al menos 48 horas antes de la primera sesión. No hay reembolsos por cancelaciones con menos de 48 horas de anticipación.' },
    { kind: 'p', text: 'Sesiones en línea: no requieren anticipo, pero el pago debe hacerse al menos 24 horas antes del inicio. Si no se recibe en ese plazo, la sesión se cancela y puede ofrecerse a otra persona. Pagar antes de cada sesión es lo que confirma la cita.' },

    { kind: 'h', text: 'Cancelaciones, cambios y reembolsos' },
    { kind: 'p', text: 'Si necesitas cancelar o cambiar una sesión, avisa con la mayor anticipación posible, por correo o por teléfono: al menos 48 horas antes de una sesión presencial y 24 horas antes de una en línea.' },
    { kind: 'p', text: 'No hay reembolsos por cancelaciones con menos de 48 horas de anticipación en sesiones presenciales, ni con menos de 24 horas en sesiones en línea.' },
    { kind: 'p', text: 'Los honorarios pagan mi tiempo y mi experiencia profesional; no garantizan un resultado. Por eso no hay reembolsos por sesiones a las que asististe y que pagaste.' },
    { kind: 'p', text: 'Si reservaste y pagaste por adelantado un paquete o un programa y decides dejarlo antes de completar todas las sesiones, se te reembolsa la parte proporcional, descontando la tarifa completa de cada sesión a la que asististe.' },

    { kind: 'h', text: 'Honorarios' },
    { kind: 'p', text: 'Todos los honorarios se informan antes de agendar. Pueden revisarse y aumentar con el tiempo; siempre recibirás confirmación de la tarifa antes de reservar.' },

    { kind: 'h', text: 'Formas de pago' },
    { kind: 'p', text: 'El pago puede hacerse en línea con tarjeta de crédito o débito, o con PayPal. Las sesiones presenciales también pueden pagarse con tarjeta al terminar. No se acepta efectivo ni cheques sin acuerdo previo. [[confirmar formas de pago — las de arriba son las de la plantilla]]' },

    { kind: 'h', text: 'Contacto entre sesiones' },
    { kind: 'p', text: 'Cualquier contacto entre sesiones será por teléfono, correo electrónico o por escrito, dentro de mi horario de atención: [[horario de atención]]. Los mensajes recibidos fuera de ese horario se atienden en el siguiente horario hábil.' },

    { kind: 'h', text: 'Condiciones médicas o psicológicas' },
    { kind: 'p', text: 'Puedo hacerte preguntas sobre tu historial médico para descartar contraindicaciones. También me ayudan a valorar si tu salud está afectando —o se ve afectada por— los objetivos que quieres alcanzar. Avísame de cualquier cambio médico durante el proceso, o si regresas a terapia después de un tiempo.' },
    { kind: 'p', text: 'Si estás recibiendo atención de algún profesional de la salud —médico, psicólogo, psiquiatra o consejero— puede pedírsete su autorización antes de empezar las sesiones.' },
    { kind: 'p', text: 'No puedo ofrecer mis servicios si padeces epilepsia o cualquier forma de psicosis.' },

    { kind: 'h', text: 'Edad' },
    { kind: 'p', text: 'Debes tener al menos 18 años para las sesiones en línea. Las personas menores de 18 años deben venir acompañadas por su madre, padre o tutor, y se atienden en persona.' },

    { kind: 'h', text: 'Asistencia a las sesiones' },
    { kind: 'p', text: 'Procura estar disponible a la hora de inicio. Si vas a llegar tarde, avísame lo antes posible. Haré lo posible por darte la sesión completa, pero depende de las citas posteriores y no puedo garantizarlo.' },

    { kind: 'h', text: 'Grabaciones de hipnoterapia' },
    { kind: 'p', text: 'No escuches las grabaciones mientras manejas, operas maquinaria o haces cualquier actividad que requiera concentración. Toda grabación es para tu uso personal y no puede compartirse, prestarse, copiarse ni venderse bajo ninguna circunstancia.' },

    { kind: 'h', text: 'Resultado de las sesiones' },
    { kind: 'p', text: 'Acordar trabajar sobre tus motivos de consulta no implica ni garantiza que se resuelvan. No se puede garantizar ningún resultado. Aun así, siempre pondré mi mejor esfuerzo y mis capacidades al servicio de tus objetivos.' },

    { kind: 'h', text: 'Normas de conducta' },
    { kind: 'p', text: 'Durante el proceso te trataré con respeto y no abusaré de la confianza que depositas en mí. Actuaré siempre con buenas prácticas, en interés de ambas partes. A cambio, te comprometes a no hacerte daño ni hacer daño a nadie, incluida yo, ni a ninguna propiedad mía o de terceros.' },
    { kind: 'p', text: 'Te comprometes a no asistir a las sesiones bajo los efectos del alcohol o de drogas recreativas, salvo medicamentos recetados por tu médico. Si asistes en esas condiciones, o muestras un comportamiento violento o abusivo, cancelaré la sesión y podré negarme a atenderte en adelante, sin reembolso de lo ya pagado.' },

    { kind: 'h', text: 'Confidencialidad' },
    { kind: 'p', text: 'Todo el contacto —sesiones, llamadas y correos— es confidencial y puede grabarse; antes de cualquier grabación se te pedirá tu consentimiento. Las grabaciones, conversaciones y notas son confidenciales, salvo en estos casos:' },
    {
      kind: 'ol',
      items: [
        'Cuando tú autorizas que se rompa la confidencialidad.',
        'Cuando un tribunal me lo exige.',
        'Cuando la naturaleza de la información no permite mantenerla: por ejemplo, si existe la posibilidad de daño para ti o para otras personas, en casos de fraude o delito, o cuando están involucradas personas menores de 18 años.',
        'Cuando el médico u otro profesional de la salud que te refirió solicita un informe. Puedes pedir una copia.',
      ],
    },

    { kind: 'h', text: 'Responsabilidad e indemnización' },
    { kind: 'p', text: 'En ningún caso Carol Leyva será responsable por daños de ningún tipo —directos, indirectos, incidentales, especiales, punitivos o consecuentes, incluidos lucro cesante o pérdidas económicas similares—, ya sea por contrato, por responsabilidad extracontractual o de cualquier otro modo, derivados de los consejos o la información que te proporcione en sus servicios profesionales. Además, aceptas defender, indemnizar y mantener indemne a Carol Leyva frente a toda reclamación, pérdida, responsabilidad, daño y gasto (incluidos honorarios legales) derivados de tu participación en esos servicios.' },

    { kind: 'h', text: 'Ley aplicable' },
    { kind: 'p', text: 'Estos términos se rigen e interpretan conforme a las leyes de [[país cuya ley aplica — la plantilla dice Inglaterra y Gales]], y aceptas someterte a la jurisdicción exclusiva de sus tribunales para cualquier controversia relacionada con ellos.' },

    { kind: 'h', text: 'Cambios a estos términos' },
    { kind: 'p', text: 'Estos términos pueden modificarse sin previo aviso. Si retomas la terapia después de un tiempo, te pido que revises los cambios.' },

    { kind: 'h', text: 'Protección de datos' },
    { kind: 'p', text: 'Tus datos personales se recogen, tratan, usan y conservan conforme al [aviso de privacidad](/aviso-de-privacidad). Al agendar una cita aceptas ese aviso; si no estás de acuerdo, no agendes. El aviso puede cambiar sin previo aviso, así que te sugiero revisarlo periódicamente.' },

    { kind: 'h', text: 'Inquietudes y quejas' },
    { kind: 'p', text: 'Si tienes una inquietud o una queja sobre tu proceso, háblalo primero conmigo y haré lo posible por resolverlo.' },

    { kind: 'h', text: 'Declaraciones de conformidad' },
    { kind: 'p', text: 'Al firmar el acuerdo, aceptas estos términos y declaras además que:' },
    {
      kind: 'ul',
      items: [
        'Carol Leyva me explicó el alcance de las terapias que ofrece, y doy mi pleno consentimiento para recibir sesiones con ella.',
        'Entiendo que los resultados varían de una persona a otra, y que el acuerdo de Carol Leyva de trabajar sobre mis motivos de consulta, con las terapias adecuadas a mi situación, no implica ni garantiza que se resuelvan.',
        'Entiendo que la hipnoterapia, y cualquier otra terapia o información que Carol Leyva proporcione —en persona, por teléfono, por correo o por internet—, no reemplaza el tratamiento médico, psicológico o psiquiátrico. Si tengo dudas sobre mi salud, consultaré a un profesional de la salud calificado.',
        'Si Carol Leyva me pide, antes o después de alguna sesión, obtener aprobación médica, consultaré a mi médico o especialista y le entregaré su autorización por escrito antes de la siguiente sesión.',
        'Sé que puedo terminar cualquier sesión, o el proceso completo, en cualquier momento.',
        'Entiendo que mi motivación es esencial en el proceso y me comprometo a participar lo mejor que pueda, incluido hacer un uso razonable de las sugerencias terapéuticas durante y entre sesiones, escuchar las grabaciones y realizar las tareas que correspondan.',
        'He respondido con veracidad y exactitud las preguntas y la información de contexto en la consulta inicial o en la primera sesión, y seguiré haciéndolo en las siguientes.',
      ],
    },

    { kind: 'h', text: 'Autorización de confidencialidad' },
    { kind: 'p', text: 'Al firmar, acepto que Carol Leyva pueda compartir información con una persona o institución específica si se determina que una persona vulnerable (menor de edad o adulta mayor) está en riesgo; si yo represento un peligro inminente para mí o para otras personas; o si se solicita judicialmente la entrega de expedientes.' },
    { kind: 'p', text: 'También entiendo que Carol Leyva puede comentar aspectos de mi caso con colegas, manteniendo siempre confidenciales mi nombre completo y mi identidad, salvo que yo autorice lo contrario.' },

    { kind: 'h', text: 'Firma' },
    { kind: 'p', text: 'Estos términos se firman antes de entregar cualquier dato personal o hacer cualquier pago. [[medio de firma — firma electrónica, formulario en el sitio o copia firmada]]' },
  ],
};

const consentimiento: LegalDoc = {
  slug: 'consentimiento',
  title: 'Consentimiento y alcance de la práctica',
  lead: 'El formulario que se firma antes de la primera sesión. Está aquí para que puedas leerlo con calma antes de agendar.',
  source: 'RTT Disclaimer Form Template',
  status: 'review',
  blocks: [
    { kind: 'h', text: 'Responsabilidad' },
    { kind: 'p', text: 'Yo, la persona que firma este formulario, libero a Carol Leyva de cualquier responsabilidad o reclamación relacionada con mi bienestar mental o físico durante el trabajo descrito y acordado en él, ahora y en el futuro. Esta renuncia no pretende excluir ni limitar la responsabilidad por muerte o lesiones personales causadas por negligencia.' },

    { kind: 'h', text: 'Alcance de la práctica' },
    { kind: 'p', text: 'Entiendo que Carol Leyva no es médica, psicóloga con cédula ni profesional médica de ningún tipo, y que la hipnoterapia no sustituye el consejo ni los servicios de un psiquiatra, psicólogo, psicoterapeuta o médico.' },

    { kind: 'h', text: 'Participación' },
    { kind: 'p', text: 'Doy a Carol Leyva pleno permiso para hipnotizarme y para usar Rapid Transformational Therapy®, sabiendo que al participar plenamente en el proceso y escuchar mi grabación personalizada durante 21 días tengo un papel importante en mi resultado.' },

    { kind: 'h', text: 'Garantía' },
    { kind: 'p', text: 'Entiendo que, aunque Rapid Transformational Therapy® tiene una tasa de éxito muy alta, Carol Leyva no puede garantizar ni garantiza resultados, porque mi éxito depende de muchos factores que ella no controla, entre ellos mi disposición y mi deseo de hacer esos cambios en mí.' },

    { kind: 'h', text: 'Grabaciones de audio' },
    { kind: 'p', text: 'Doy a Carol Leyva pleno permiso para hacer grabaciones de audio que pueden incluir mi voz. Entiendo que, si se hace una grabación durante o después de mis sesiones, Carol Leyva conserva todos los derechos de autor sobre cualquier material que se produzca y se me entregue.' },

    { kind: 'h', text: 'Proceso de profundización' },
    { kind: 'p', text: 'Autorizo a Carol Leyva a levantar mi brazo con respeto, tocar mi hombro o mecer suavemente mi cabeza durante mis sesiones de Rapid Transformational Therapy®, para facilitar el proceso de profundización.' },

    { kind: 'h', text: 'Confidencialidad' },
    { kind: 'p', text: 'Al firmar este formulario, acepto que Carol Leyva pueda compartir información con una persona o institución específica si se determina que una persona vulnerable (menor de edad o adulta) está en riesgo; si yo, como cliente, represento un peligro inminente para mí o para otras personas; o si se solicita judicialmente la entrega de expedientes.' },
    { kind: 'p', text: 'También entiendo que, en cualquier momento, Carol Leyva puede comentar aspectos de mi caso con colegas, manteniendo siempre confidenciales mi nombre completo y mi identidad, salvo que yo autorice lo contrario.' },
  ],
};

const testimonios: LegalDoc = {
  slug: 'testimonios',
  title: 'Uso de testimonios',
  lead: 'Ninguna historia se publica sin permiso. Este es el formulario que firma quien decide compartir la suya.',
  source: 'RTT Client Testimonial Release Form',
  status: 'review',
  blocks: [
    { kind: 'h', text: 'Lo que autoriza quien firma' },
    { kind: 'p', text: 'Esta autorización se refiere al testimonio que la persona que firma entrega a Carol Leyva. Al firmarla, acepta lo siguiente:' },
    {
      kind: 'ol',
      items: [
        'Que Carol Leyva use, reproduzca, distribuya y divulgue la información de mi testimonio (y, en su caso, mi imagen en foto o video), y que este pueda difundirse públicamente con fines que incluyen, entre otros, publicidad, promoción y prensa.',
        'Que no tengo derecho a compensación por el uso de este testimonio (ni de mi imagen), ni a intervenir en cómo se usa.',
        'Que renuncio a cualquier pago por su uso, salvo que se use para fines distintos de los descritos en el punto 1.',
        'Que puedo revocar esta autorización en cualquier momento, avisando por escrito.',
        'Que entiendo y apruebo que se divulgue la información de mi testimonio (y, en su caso, mi imagen) como parte de sus relaciones públicas.',
        'Que renuncio al derecho de aprobación previa y libero a Carol Leyva de cualquier reclamación por daños derivada del uso del testimonio o de la información que contiene.',
        'Que esta autorización se rige por las leyes y la jurisdicción de [[país y tribunales competentes — la plantilla dice Inglaterra]].',
      ],
    },

    { kind: 'h', text: 'Protección de datos' },
    { kind: 'p', text: 'Para usar datos personales con fines de difusión hace falta un permiso explícito. Por eso:' },
    {
      kind: 'ol',
      start: 8,
      items: [
        'Reconozco que este testimonio puede contener datos personales míos y que se compartirá públicamente para los fines del punto 1. Sé que puedo acceder a esos datos y pedir su corrección o eliminación. Al firmar, consiento que los datos personales del testimonio se compartan públicamente y se conserven conforme a [[ley de protección de datos aplicable — la plantilla cita el reglamento europeo]].',
      ],
    },
  ],
};

export const legalDocs = { privacidad, terminos, consentimiento, testimonios } as const;

/** Lo que dice la página mientras el documento está en revisión. */
export const reviewNotice = {
  label: 'Versión en revisión',
  body: 'Traducción al español de la plantilla que RTT entrega a sus practitioners. Los campos marcados están pendientes de confirmar, y el documento no es vigente hasta que se aprueben.',
  pendingLabel: 'Pendiente',
};
