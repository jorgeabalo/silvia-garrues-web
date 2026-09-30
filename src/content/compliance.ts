import type { Lang } from '../i18n/routes'
import { site } from './site'

/**
 * Datos de identificación profesional (LSSI art. 10 y normas de la Abogacía).
 * Rellenar los campos `null` con los datos reales antes de publicar en garrues.com.
 */
export const professional = {
  name: 'Silvia Garrues Remírez',
  nif: null as string | null,
  barNumbers: [
    { bar: { es: 'Ilustre Colegio de la Abogacía de Gipuzkoa', eu: 'Gipuzkoako Abokatuen Elkargo Ohoretsua' }, number: null as string | null, url: 'https://www.icagi.net' },
    { bar: { es: 'Ilustre Colegio de la Abogacía de Madrid', eu: 'Madrilgo Abokatuen Elkargo Ohoretsua' }, number: null as string | null, url: 'https://web.icam.es' },
  ],
}

type L<T> = Record<Lang, T>
type Step = { title: string; text: string }

/** Pasos: áreas en las que cabe el acuerdo */
const stepsAgreement: L<Step[]> = {
  es: [
    { title: 'Te escuchamos', text: 'En la primera cita nos cuentas qué ocurre. Con calma y con total confidencialidad.' },
    { title: 'Estudiamos tu caso', text: 'Te explicamos tus opciones con palabras claras, los pasos y cómo se calcularán los honorarios.' },
    { title: 'Buscamos el acuerdo', text: 'Siempre que es posible, a través del diálogo y la mediación: más rápido y menos gravoso.' },
    { title: 'Si no hay acuerdo', text: 'Acudimos al juzgado con la misma firmeza en la defensa de tus derechos.' },
  ],
  eu: [
    { title: 'Entzun egiten zaitugu', text: 'Lehen hitzorduan zer gertatzen den kontatzen diguzu. Lasai eta erabateko konfidentzialtasunez.' },
    { title: 'Zure kasua aztertzen dugu', text: 'Zure aukerak hitz argiz azaltzen dizkizugu, urratsak eta ordainsariak nola kalkulatuko diren.' },
    { title: 'Akordioa bilatzen dugu', text: 'Ahal den guztietan, elkarrizketaren eta bitartekaritzaren bidez: azkarragoa eta arinagoa.' },
    { title: 'Akordiorik ez badago', text: 'Epaitegira joaten gara, zure eskubideak irmotasun berarekin defendatzeko.' },
  ],
}

/** Pasos: penal y violencia (sin mediación) */
const stepsDefense: L<Step[]> = {
  es: [
    { title: 'Te escuchamos con discreción', text: 'Nos cuentas lo ocurrido en un entorno seguro y confidencial.' },
    { title: 'Estudiamos cada detalle', text: 'Analizamos tu situación y te explicamos con claridad qué puede pasar y qué opciones tienes.' },
    { title: 'Te acompañamos en cada paso', text: 'Declaraciones, medidas de protección y juicio: no estarás solo ni sola en ningún momento.' },
  ],
  eu: [
    { title: 'Diskrezioz entzuten zaitugu', text: 'Gertatutakoa ingurune seguru eta konfidentzial batean kontatzen diguzu.' },
    { title: 'Xehetasun oro aztertzen dugu', text: 'Zure egoera aztertu eta argi azaltzen dizugu zer gerta daitekeen eta zer aukera dituzun.' },
    { title: 'Urrats bakoitzean lagunduko dizugu', text: 'Deklarazioak, babes-neurriak eta epaiketa: ez zara inoiz bakarrik egongo.' },
  ],
}

export function areaSteps(id: string) {
  return id === 'penal' || id === 'violencia' ? stepsDefense : stepsAgreement
}

/** Índices de t.faq.items relacionados con cada área (la de honorarios se añade siempre). */
export const areaFaq: Record<string, number[]> = {
  divorcios: [0, 1, 3, 2],
  familia: [3, 1, 2],
  herencias: [4],
  violencia: [5],
  mediacion: [2, 1],
}

export const copy = {
  es: {
    back: 'Todas las áreas',
    howTitle: 'Cómo *trabajamos.*',
    faqTitle: 'Preguntas *frecuentes.*',
    noMediation: 'En los casos de violencia de género la ley no permite la mediación. Tu seguridad es lo primero.',
    urgentTitle: '¿Es urgente?',
    urgentText: 'Llámanos directamente: es la forma más rápida de hablar con Silvia.',
    danger: 'Si estás en peligro, llama al 112. El 016 atiende a víctimas de violencia de género las 24 horas y no deja rastro en la factura.',
    where: 'Despacho en Tolosa (Gipuzkoa). Atendemos en todo el País Vasco, en el Estado español e internacionalmente, en castellano, euskera e inglés.',
    feesTitle: 'Honorarios, *con claridad.*',
    fees: [
      'Antes de empezar te explicamos cómo se calcularán los honorarios de tu asunto.',
      'Si lo pides, te damos un presupuesto por escrito.',
      'Trabajamos de forma eficiente, con costes controlados.',
      'Puedes pagar por transferencia o por Bizum.',
    ],
    oldArticle: (y: number) => `Artículo de ${y}: la normativa puede haber cambiado desde entonces.`,
    colegiada: 'Abogada colegiada en los Colegios de la Abogacía de Gipuzkoa y de Madrid',
    pending: 'pendiente',
  },
  eu: {
    back: 'Arlo guztiak',
    howTitle: 'Nola *lan egiten dugun.*',
    faqTitle: 'Ohiko *galderak.*',
    noMediation: 'Genero-indarkeriako kasuetan legeak ez du bitartekaritza onartzen. Zure segurtasuna da lehena.',
    urgentTitle: 'Presazkoa da?',
    urgentText: 'Deitu zuzenean: Silviarekin hitz egiteko modurik azkarrena da.',
    danger: 'Arriskuan bazaude, deitu 112ra. 016 zenbakiak genero-indarkeriaren biktimak artatzen ditu 24 orduz, eta ez du arrastorik uzten fakturan.',
    where: 'Bulegoa Tolosan (Gipuzkoa). Euskal Herri osoan, Espainiako Estatuan eta nazioartean ematen dugu arreta, gaztelaniaz, euskaraz eta ingelesez.',
    feesTitle: 'Ordainsariak, *argi eta garbi.*',
    fees: [
      'Hasi aurretik, zure gaiaren ordainsariak nola kalkulatuko diren azaltzen dizugu.',
      'Eskatzen baduzu, aurrekontua idatziz ematen dizugu.',
      'Modu eraginkorrean lan egiten dugu, kostuak kontrolatuta.',
      'Transferentziaz edo Bizum bidez ordain dezakezu.',
    ],
    oldArticle: (y: number) => `${y}ko artikulua: araudia aldatu egin daiteke ordutik.`,
    colegiada: 'Gipuzkoako eta Madrilgo Abokatuen Elkargoetako abokatu elkargokidea',
    pending: 'zehazteko',
  },
}


type Section = { h: string; p: (string | [string, string])[] }

/** Textos legales. [etiqueta, valor] se muestra como fila de datos. */
export function legalDoc(kind: 'legal' | 'privacy' | 'cookies', lang: Lang): { updated: string; sections: Section[] } {
  const pend = `[${copy[lang].pending}]`
  const addr = `${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.region})`
  const phone = site.phones[0].label
  const bars = professional.barNumbers
  const es = lang === 'es'
  const updated = '2026-09-30'

  if (kind === 'legal') {
    return {
      updated,
      sections: [
        {
          h: es ? '1. Titular del sitio web' : '1. Webgunearen titularra',
          p: [
            es ? 'En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa:' : '34/2002 Legeak, Informazioaren Gizartearen eta Merkataritza Elektronikoaren Zerbitzuei buruzkoak (LSSI-CE), 10. artikuluan xedatutakoa betez, honako hau jakinarazten da:',
            [es ? 'Titular' : 'Titularra', professional.name],
            ['NIF', professional.nif ?? pend],
            [es ? 'Domicilio profesional' : 'Helbide profesionala', addr],
            [es ? 'Correo electrónico' : 'Posta elektronikoa', site.email],
            [es ? 'Teléfono' : 'Telefonoa', phone],
          ],
        },
        {
          h: es ? '2. Datos profesionales' : '2. Datu profesionalak',
          p: [
            [es ? 'Profesión' : 'Lanbidea', es ? 'Abogada' : 'Abokatua'],
            [es ? 'Título académico' : 'Titulu akademikoa', es ? 'Derecho (UNED)' : 'Zuzenbidea (UNED)'],
            [es ? 'Estado de expedición del título' : 'Titulua eman duen estatua', es ? 'España' : 'Espainia'],
            ...bars.map((b) => [b.bar[lang], `${es ? 'nº de colegiada' : 'elkargokide-zk.'} ${b.number ?? pend}`] as [string, string]),
            es
              ? 'Normas profesionales aplicables: Estatuto General de la Abogacía Española (Real Decreto 135/2021, de 2 de marzo), Código Deontológico de la Abogacía Española y normativa de los colegios citados, disponibles en abogacia.es, icagi.net e icam.es.'
              : 'Aplicatu beharreko arau profesionalak: Espainiako Abokatutzaren Estatutu Orokorra (135/2021 Errege Dekretua, martxoaren 2koa), Espainiako Abokatutzaren Kode Deontologikoa eta aipatutako elkargoen araudia, abogacia.es, icagi.net eta icam.es webguneetan eskuragarri.',
          ],
        },
        {
          h: es ? '3. Contenido de la web' : '3. Webgunearen edukia',
          p: [
            es
              ? 'La información de esta web es general y divulgativa. No constituye asesoramiento jurídico ni crea una relación abogada-cliente. Cada caso requiere un estudio individual.'
              : 'Webgune honetako informazioa orokorra eta dibulgatiboa da. Ez da aholkularitza juridikoa, eta ez du abokatu-bezero harremanik sortzen. Kasu bakoitzak azterketa indibiduala behar du.',
            es
              ? 'Los artículos llevan su fecha de publicación. La normativa cambia: un artículo antiguo puede no reflejar la ley vigente.'
              : 'Artikuluek argitalpen-data dute. Araudia aldatu egiten da: artikulu zahar batek agian ez du indarreko legea islatzen.',
          ],
        },
        {
          h: es ? '4. Propiedad intelectual' : '4. Jabetza intelektuala',
          p: [
            es
              ? 'Los textos, fotografías y el logotipo de ADOS pertenecen a su titular. No se permite su reproducción sin autorización.'
              : 'Testuak, argazkiak eta ADOS logotipoa titularrarenak dira. Ezin dira baimenik gabe erreproduzitu.',
          ],
        },
        {
          h: es ? '5. Legislación aplicable' : '5. Legeria aplikagarria',
          p: [es ? 'Este aviso se rige por la legislación española.' : 'Ohar hau Espainiako legeriak arautzen du.'],
        },
      ],
    }
  }

  if (kind === 'privacy') {
    return {
      updated,
      sections: [
        {
          h: es ? '1. Responsable del tratamiento' : '1. Tratamenduaren arduraduna',
          p: [
            [es ? 'Responsable' : 'Arduraduna', professional.name],
            ['NIF', professional.nif ?? pend],
            [es ? 'Dirección' : 'Helbidea', addr],
            [es ? 'Contacto' : 'Harremana', site.email],
          ],
        },
        {
          h: es ? '2. Qué datos tratamos y para qué' : '2. Zer datu tratatzen ditugun eta zertarako',
          p: [
            es
              ? 'Solo los que nos facilitas en el formulario o por correo (nombre, forma de contacto y área de consulta), para responderte y, en su caso, gestionar el encargo profesional.'
              : 'Formularioan edo posta bidez ematen dizkiguzunak bakarrik (izena, harremanetarako bidea eta kontsulta-arloa), zuri erantzuteko eta, hala badagokio, enkargu profesionala kudeatzeko.',
            es
              ? 'Te pedimos que no envíes detalles de tu caso ni datos sensibles (salud, menores, denuncias) por el formulario. Los trataremos en persona o por un canal seguro.'
              : 'Mesedez, ez bidali zure kasuaren xehetasunik ezta datu sentikorrik ere (osasuna, adingabeak, salaketak) formularioaren bidez. Aurrez aurre edo kanal seguru baten bidez landuko ditugu.',
          ],
        },
        {
          h: es ? '3. Base legal y conservación' : '3. Oinarri juridikoa eta kontserbazioa',
          p: [
            es
              ? 'La base es tu consentimiento y, si nos encargas el asunto, la relación profesional y las obligaciones legales. Conservamos los datos el tiempo necesario para atenderte y durante los plazos legales. Estamos sujetos al secreto profesional.'
              : 'Oinarria zure baimena da eta, gaia enkargatzen badiguzu, harreman profesionala eta legezko betebeharrak. Datuak zu artatzeko behar den denboran eta legezko epeetan gordetzen ditugu. Sekretu profesionalaren mende gaude.',
          ],
        },
        {
          h: es ? '4. Destinatarios' : '4. Hartzaileak',
          p: [es ? 'No cedemos tus datos a terceros salvo obligación legal.' : 'Ez diegu zure daturik lagatzen hirugarrenei, legezko betebeharrik ez badago.'],
        },
        {
          h: es ? '5. Tus derechos' : '5. Zure eskubideak',
          p: [
            es
              ? `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${site.email}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).`
              : `Sarbide-, zuzenketa-, ezabatze-, aurkaratze-, mugatze- eta eramangarritasun-eskubideak erabil ditzakezu ${site.email} helbidera idatzita. Datuak Babesteko Espainiako Agentzian ere erreklama dezakezu (aepd.es).`,
          ],
        },
      ],
    }
  }

  return {
    updated,
    sections: [
      {
        h: es ? 'Uso de cookies' : 'Cookien erabilera',
        p: [
          es
            ? 'Esta web no utiliza cookies de analítica, de publicidad ni de seguimiento. Por eso no te mostramos ningún aviso de consentimiento.'
            : 'Webgune honek ez du analitika-, publizitate- edo jarraipen-cookierik erabiltzen. Horregatik ez dizugu baimen-oharrik erakusten.',
          es
            ? 'El mapa del despacho se abre en Google Maps, en una página externa con su propia política de cookies.'
            : 'Bulegoaren mapa Google Maps-en irekitzen da, bere cookie-politika duen kanpoko orri batean.',
          es
            ? 'Si en el futuro se añaden cookies, actualizaremos esta página y te pediremos el consentimiento.'
            : 'Etorkizunean cookieak gehitzen badira, orri hau eguneratuko dugu eta zure baimena eskatuko dizugu.',
        ],
      },
    ],
  }
}
