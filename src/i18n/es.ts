/**
 * Textos en castellano.
 * Convención: las palabras entre *asteriscos* se componen en serif editorial cursiva.
 * Todo el contenido biográfico y jurídico procede de garrues.com y de las
 * publicaciones de prensa recogidas en el blog de Silvia. No inventar.
 */
const es = {
  meta: {
    home: {
      title: 'Silvia Garrues Remírez · Abogada y mediadora en Tolosa, Gipuzkoa',
      description:
        'Abogada colegiada en Gipuzkoa y Madrid, con trayectoria en Estados Unidos. Derecho de familia, divorcios, mediación, herencias, civil, penal, extranjería y laboral. Tolosa · Castellano, euskera e inglés.',
    },
    silvia: {
      title: 'Silvia Garrues Remírez · Trayectoria',
      description:
        'De Tolosa a Houston y de vuelta: University of Houston Law Center, 8 años con Busby & Associates en Texas, ejercicio en Madrid y despacho propio en Tolosa.',
    },
    services: {
      title: 'Áreas de práctica · Silvia Garrues Remírez, abogada',
      description:
        'Derecho de familia, mediación, herencias y sucesiones, derecho civil, penal, extranjería, laboral y seguridad social, seguros y tráfico. Despacho en Tolosa, Gipuzkoa.',
    },
    articles: {
      title: 'Pensamiento y Derecho · Artículos de Silvia Garrues Remírez',
      description: 'Artículos, reflexiones jurídicas y presencia en prensa de Silvia Garrues Remírez y el despacho ADOS.',
    },
    contact: {
      title: 'Contacto · Silvia Garrues Remírez, abogada en Tolosa',
      description: 'Paseo Pedro de Tolosa, 1 · 20400 Tolosa. Teléfono 943 65 10 11 · +34 683 66 93 83 · silvia@garrues.com',
    },
    legal: { title: 'Aviso legal · Silvia Garrues Remírez', description: 'Aviso legal del sitio web garrues.com.' },
    privacy: { title: 'Política de privacidad · Silvia Garrues Remírez', description: 'Política de privacidad y protección de datos.' },
    cookies: { title: 'Política de cookies · Silvia Garrues Remírez', description: 'Información sobre el uso de cookies.' },
  },

  ui: {
    skip: 'Saltar al contenido',
    home: 'Inicio',
    silvia: 'Silvia',
    services: 'Servicios',
    articles: 'Artículos',
    contact: 'Contacto',
    consult: 'Consulta',
    menu: 'Menú',
    close: 'Cerrar',
    legal: 'Aviso legal',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    langLabel: 'Idioma',
    langNames: { es: 'Castellano', eu: 'Euskara' },
    readMore: 'Saber más',
    readArticle: 'Leer el artículo',
    back: 'Volver al inicio',
    prev: 'Anterior',
    next: 'Siguiente',
    originalLang: { es: 'En castellano', eu: 'En euskera' },
    photoCredit: 'Fotografía',
  },

  hero: {
    role: 'Abogada y mediadora',
    credential: 'Divorcios · Familia · Herencias y sucesiones · Penal',
    title: 'Cuando una familia se separa, *alguien tiene que poner orden.*',
    paragraphs: [
      'Silvia Garrues Remírez es experta en derecho de familia: divorcios, separaciones, custodia de hijos, acuerdos prematrimoniales y cambios en los acuerdos. También lleva herencias y sucesiones y asuntos penales.',
      'Primero, el diálogo: la mediación es una alternativa eficaz, menos gravosa y más rápida. Si no hay acuerdo, a juicio, siempre firme en mantener tus derechos.',
      'Más de 15 años de experiencia. En castellano, euskera e inglés.',
    ],
    ctaPrimary: 'Consulta tu caso',
    ctaSecondary: 'Conoce a Silvia',
    photoCaption: 'Silvia Garrues Remírez en su despacho',
  },

  intro: {
    label: 'Película introductoria',
    scenes: [
      'Un proyecto en común.',
      'Hasta que los caminos se separan.',
      'La casa, el coche, los hijos… todo se disputa.',
      'Entonces llega la calma.',
    ],
    finale: 'Silvia pone los puntos sobre las íes.',
    skip: 'Saltar',
    replay: 'Ver de nuevo',
  },

  facts: [
    { value: '15+', label: 'años de experiencia en derecho de familia y mediación' },
    { value: '2', label: 'colegios de la abogacía: Gipuzkoa y Madrid' },
    { value: '3', label: 'idiomas: castellano, euskera e inglés' },
  ],

  specialties: {
    kicker: 'Especialidades',
    title: 'Divorcios, familia, herencias. *Y cuando hace falta, penal.*',
    intro: 'Asesora en cualquier rama del Derecho, pero su trabajo se concentra donde más está en juego: la familia.',
    others: 'También asesora en',
  },

  divorce: {
    kicker: 'Divorcios',
    title: '¿Te estás *separando?*',
    intro: 'Un divorcio no es solo un papel. Son tus hijos, tu casa y tu tranquilidad. Silvia te ayuda a ordenar cada pieza, con calma y sin ceder en lo importante.',
    stakes: [
      { title: 'Los hijos', text: 'Custodia de hijos y medidas paternofiliales pensadas para su bienestar.' },
      { title: 'La casa y los bienes', text: 'Régimen económico matrimonial y liquidación de bienes gananciales.' },
      { title: 'Los acuerdos', text: 'Acuerdos previos al matrimonio o convivencia, y revisión de acuerdos cuando la vida cambia.' },
    ],
    pathTitle: 'El camino',
    quote: 'Nuestra actitud profesional te ayudará a encontrar puntos en común, incluso en las situaciones más complicadas, pero siempre seremos firmes en mantener tus derechos.',
    quoteSource: 'ADOS · Abokatuak eta Bitartekariak',
  },

  film: { label: 'Silvia · Tolosa · Derecho' },

  silvia: {
    kicker: 'Silvia',
    title: 'La calma que necesitas *en medio del conflicto.*',
    lead:
      'Silvia es abogada colegiada en el Colegio de Abogados de Gipuzkoa y en el de Madrid. Tiene trayectoria internacional en el sistema judicial clásico y es conocida por utilizar la mediación como vía alternativa de resolución de conflictos, siempre que es posible.',
    chapters: [
      {
        place: 'Formación',
        title: 'Experta en Mediación',
        text: 'Titulada por la Universidad Nacional de Educación a Distancia, cuenta con múltiples títulos, entre ellos el de Experto en Mediación de la Universidad Rey Juan Carlos.',
      },
      {
        place: 'Experiencia',
        title: 'Más de 15 años',
        text: 'Una trayectoria que incluye 8 años en el sistema judicial norteamericano y el ejercicio en Madrid y en Gipuzkoa. Un despacho enfocado en resolver el litigio y solucionar el conflicto.',
      },
      {
        place: 'Colegiada',
        title: 'Gipuzkoa y Madrid',
        text: 'Abogada colegiada en el Colegio de Abogados de Gipuzkoa y en el de Madrid. Atiende en castellano, euskera e inglés.',
      },
    ],
    quote: 'Me parece importante agotar la vía de la mediación.',
    quoteSource: 'Silvia Garrues en Tolosaldeko Ataria, 2019',
    cta: 'Leer su trayectoria completa',
  },

  roots: {
    kicker: 'Tolosa · Gipuzkoa',
    title: 'Raíces en *Tolosa.* Una mirada *abierta al mundo.*',
    text: 'Tolosa es su origen y el lugar desde el que ejerce hoy, en el Paseo Pedro de Tolosa. Entre medias, Houston y Madrid. De ese recorrido nace una manera de trabajar que une el rigor del proceso judicial con la cultura de la mediación que conoció en Estados Unidos.',
    caption: 'El río Oria a su paso por Tolosa',
  },

  practice: {
    kicker: 'Áreas de práctica',
    title: 'Asesoramos en *cualquier rama* del Derecho.',
    intro:
      'Con especial dedicación al Derecho de familia y a la mediación. Detrás de cada área, el mismo método: estudiar el caso al detalle y buscar la solución más eficaz y menos gravosa.',
    all: 'Ver todas las áreas',
  },

  approach: {
    kicker: 'Método',
    title: 'Tres enfoques para *defenderte.*',
    items: [
      { name: 'Jurídico', text: 'La herramienta jurídica nos permite estudiar los casos aplicando la normativa y la jurisprudencia vigente.' },
      { name: 'Comunicación No Violenta', text: 'La Comunicación No Violenta nos ayuda a conectar emocionalmente con las personas y a identificar sus necesidades humanas.' },
      { name: 'Herramientas sistémicas', text: 'La herramienta sistémica nos ayuda a reconocer dinámicas ocultas y a abordar el conflicto desde su origen.' },
    ],
    during: 'Durante el proceso usamos Derecho',
    modes: ['colaborativo', 'constructivo', 'restaurativo'],
    offer: ['Ambiente cercano', 'Experiencia comprobable', 'Eficiencia con costes controlados', 'Empatía y constructivismo'],
  },

  ulpiano: {
    kicker: 'Pensamiento y Derecho',
    quote: 'La Justicia es el hábito de dar a cada quien *lo suyo.»*',
    author: 'Ulpiano',
    note: 'La cita que Silvia eligió para presentar su despacho. Jurista romano del siglo III, su definición de justicia sigue en el centro de la tradición jurídica europea.',
  },

  articles: {
    kicker: 'Pensamiento y Derecho',
    title: 'Textos *propios.*',
    intro: 'Artículos publicados por el despacho en su blog, y la voz de Silvia en la prensa vasca.',
    pressTitle: 'En la prensa',
    blogTitle: 'Desde el blog',
    all: 'Ver todos los artículos',
    onBlog: 'Ver el blog completo',
  },

  press: {
    kicker: 'En la prensa',
    title: 'La prensa vasca, sobre *su trabajo.*',
  },

  international: {
    kicker: 'Experiencia internacional',
    title: 'Entre *Houston* y *Tolosa.*',
    text: 'Silvia conoce desde dentro dos culturas jurídicas: el sistema norteamericano, en el que trabajó durante 8 años, y el español, en el que ha ejercido en Madrid y en Gipuzkoa. Una doble mirada que hoy pone al servicio de cada cliente, también en asuntos con un componente internacional.',
    places: [
      { city: 'Tolosa', region: 'Gipuzkoa', detail: 'Origen y despacho' },
      { city: 'Houston', region: 'Texas, EE. UU.', detail: 'University of Houston Law Center · Busby & Associates' },
      { city: 'Madrid', region: 'España', detail: 'Ejercicio en el sistema judicial español' },
      { city: 'Tolosa', region: 'Gipuzkoa', detail: 'ADOS' },
    ],
    visas: 'Asesoría para la obtención de visados a los Estados Unidos de América.',
  },

  cta: {
    title: 'Hablemos de *tu caso.*',
    text: 'Cuéntanos qué está pasando. Te escucharemos con calma y te diremos con claridad qué camino tiene más sentido: el acuerdo o el juzgado.',
    button: 'Solicitar consulta',
  },

  contact: {
    kicker: 'Contacto',
    title: 'Hablar con Silvia es *sencillo.*',
    intro: 'Citas presenciales en el despacho de Tolosa, con horario flexible adaptado a tu ritmo de vida. También puedes escribir mediante el formulario.',
    phone: 'Teléfono',
    email: 'Email',
    office: 'Despacho',
    howToArrive: 'Cómo llegar',
    bizum: 'Aceptamos pagos por Bizum',
    skype: 'Skype',
    form: {
      title: 'Escríbenos',
      name: 'Nombre',
      email: 'Email',
      phone: 'Teléfono',
      reason: 'Motivo de consulta',
      reasonPlaceholder: 'Selecciona un área',
      other: 'Otro asunto',
      message: 'Mensaje',
      privacy: 'He leído y acepto la',
      privacyLink: 'política de privacidad',
      submit: 'Enviar consulta',
      sending: 'Enviando…',
      success: 'Gracias. Hemos recibido tu consulta y te responderemos lo antes posible.',
      mailto: 'Se ha abierto tu programa de correo con el mensaje preparado. Solo tienes que enviarlo.',
      error: 'No se ha podido enviar. Escríbenos directamente a silvia@garrues.com.',
      required: 'Campo obligatorio',
      disclaimer:
        'El envío de este formulario no crea una relación abogado-cliente ni supone la aceptación del encargo. Por favor, no incluyas información confidencial hasta que hayamos confirmado que podemos ocuparnos de tu asunto.',
      rgpd: 'Responsable: Silvia Garrues Remírez. Finalidad: atender tu consulta. Legitimación: tu consentimiento. No se cederán datos a terceros salvo obligación legal. Puedes ejercer tus derechos de acceso, rectificación y supresión escribiendo a silvia@garrues.com.',
    },
  },

  footer: {
    tagline: 'Abogada y mediadora · Tolosa, Gipuzkoa',
    rights: 'Todos los derechos reservados.',
  },

  pages: {
    silvia: {
      kicker: 'Trayectoria',
      title: 'Silvia Garrues *Remírez.*',
      intro:
        'Fundadora de ADOS, un despacho que se caracteriza por ser multidisciplinar, moderno y humanista, y que cuenta con profesionales altamente cualificados para realizar diferentes tipos de asesorías y llevar a cabo procesos judiciales.',
      mediationTitle: 'Por qué la *mediación.*',
      mediationText: [
        'La mediación es un mecanismo alternativo reconocido de solución de conflictos, en el que dos personas o más pueden solucionar sus controversias mediante el diálogo, la escucha y la proposición.',
        'Silvia la conoció ejerciendo en Estados Unidos. Hoy la aplica en Tolosa, sin renunciar nunca a la vía judicial cuando es la que protege mejor los derechos de su cliente.',
      ],
      pressQuote: 'La abogada tolosarra ha pasado doce años en Estados Unidos, donde se ha especializado en la mediación.',
      pressSource: 'Diario Vasco, 3 de abril de 2019',
      languages: 'Idiomas de trabajo',
      languagesList: ['Castellano', 'Euskera', 'Inglés'],
      bars: 'Colegiada en',
      barsList: ['Ilustre Colegio de la Abogacía de Gipuzkoa', 'Ilustre Colegio de la Abogacía de Madrid'],
    },
    services: {
      kicker: 'Servicios',
      title: 'Áreas de *práctica.*',
      intro: 'Te podemos ayudar en cualquier rama del Derecho. Estas son las áreas en las que el despacho trabaja de forma habitual.',
      weHelp: 'Te podemos ayudar en',
      mediationTitle: 'La mediación, *paso a paso.*',
      mediationSteps: [
        { title: 'Mediación', text: 'Las partes, con un tercero neutral, buscan un acuerdo propio mediante el diálogo.' },
        { title: 'Acuerdo y resolución', text: 'Si hay acuerdo, se formaliza y resuelve el conflicto de manera más rápida y menos gravosa.' },
        { title: 'Si no hay acuerdo', text: 'Se acude a juicio contencioso, con la misma firmeza en la defensa de tus derechos.' },
      ],
      benefitsTitle: 'Beneficios de la mediación',
      benefits: [
        'Reduce la carga del sistema judicial.',
        'Es más rápida y económica.',
        'Resuelve el conflicto de forma pacífica: todos ganan.',
        'Es voluntaria: ambas partes se comprometen a llegar a un acuerdo, sin agregar más conflictos.',
        'Protege las relaciones del desgaste propio de un pleito.',
        'Las soluciones las proponen las propias partes.',
      ],
    },
    articles: {
      kicker: 'Pensamiento y Derecho',
      title: 'Artículos y *prensa.*',
      intro: 'Una selección de los textos publicados en el blog del despacho y de la presencia de Silvia en medios de comunicación. Los artículos completos se conservan en su blog original.',
      filterAll: 'Todos',
    },
    contact: {
      kicker: 'Contacto',
      title: 'Consulta tu *caso.*',
    },
    legal: {
      title: 'Aviso legal',
      pending:
        'Documento en preparación. Debe completarse con los datos identificativos del titular (nombre, NIF, número de colegiada y colegio profesional) antes de publicar la web.',
    },
    privacy: {
      title: 'Política de privacidad',
      pending:
        'Documento en preparación. Debe redactarse conforme al RGPD y a la LOPDGDD, indicando responsable, finalidades, legitimación, conservación y derechos, antes de publicar la web.',
    },
    cookies: {
      title: 'Política de cookies',
      pending:
        'Esta web no utiliza cookies de analítica ni de publicidad. Si en el futuro se añaden, este documento y el aviso de consentimiento deberán actualizarse.',
    },
    notFound: { title: 'Página no encontrada', text: 'La página que buscas no existe o ha cambiado de dirección.' },
  },
}

export default es
export type Dict = typeof es
