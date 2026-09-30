import type { Lang } from '../i18n/routes'
import type { PhotoKey } from './photos'

/**
 * Artículos REALES del blog del despacho (garruesabogadoymediacion.blogspot.com)
 * y apariciones en prensa. Títulos, fechas y extractos literales.
 * `excerpt` solo se rellena cuando se dispone del texto original exacto.
 */
export interface Article {
  title: string
  date: string // ISO
  url: string
  /** Idioma original del texto */
  lang: Lang
  area: Record<Lang, string>
  excerpt?: string
  /** Imagen propia del artículo (blog) o fotografía del inventario */
  image?: string
  photo?: PhotoKey
}

const blog = 'https://garruesabogadoymediacion.blogspot.com'

const A = {
  familia: { es: 'Familia', eu: 'Familia' },
  mediacion: { es: 'Mediación', eu: 'Bitartekaritza' },
  laboral: { es: 'Laboral', eu: 'Lana' },
  penal: { es: 'Penal', eu: 'Zigor-zuzenbidea' },
  civil: { es: 'Civil', eu: 'Zibila' },
  mercantil: { es: 'Mercantil', eu: 'Merkataritza' },
  extranjeria: { es: 'Extranjería', eu: 'Atzerritartasuna' },
  seguros: { es: 'Seguros y tráfico', eu: 'Aseguruak eta trafikoa' },
  sucesiones: { es: 'Sucesiones', eu: 'Oinordetzak' },
}

export const articles: Article[] = [
  {
    title: 'LA NUEVA REFORMA LABORAL DEL 2022: CAMBIOS EN LA CONTRATACIÓN',
    date: '2022-04-28',
    url: `${blog}/2022/04/la-nueva-reforma-laboral-del-2022.html`,
    lang: 'es',
    area: A.laboral,
    excerpt:
      'Después de que las empresas hayan tenido un periodo de tres meses de transición para adaptarse a la nueva reforma laboral y que el 31 de diciembre se suspendiese su entrada en vigor, por fin, el 31 de marzo de este 2022 la reforma ha conseguido plena vigencia produciendo diversos cambios en el marco de la contratación laboral.',
    photo: 'officeDesk',
  },
  {
    title: 'Diferencias entre arbitraje y mediación',
    date: '2021-07-27',
    url: `${blog}/2021/07/diferencias-entre-arbitraje-y-mediacion.html`,
    lang: 'es',
    area: A.mediacion,
    excerpt: 'En algunos momentos estas dos figuras han sido confundidas entre sí, siendo incluso utilizados como sinónimos.',
    photo: 'meeting3',
  },
  {
    title: 'El DIVORCIO: Los hijos, ese gran problema',
    date: '2018-02-01',
    url: `${blog}/2018/02/el-divorcio-los-hijos-ese-gran-problema.html`,
    lang: 'es',
    area: A.familia,
    excerpt:
      'Las cifras del divorcio son muy importantes. En España crece y va hacia el 30% sobre matrimonios celebrados. En USA está por encima del 40% bajando algo los últimos años. Es un fenómeno que se está dando, al menos, en el mundo occidental.',
    photo: 'officeWaiting',
  },
  {
    title: 'La importancia de los medios de prueba',
    date: '2021-07-08',
    url: `${blog}/2021/07/la-importancia-de-los-medios-de-prueba.html`,
    lang: 'es',
    area: A.civil,
    excerpt: 'Los medios de prueba son fundamentales en cualquier tipo de juicio…',
    photo: 'library',
  },
  {
    title: 'El contrato de compraventa',
    date: '2021-09-03',
    url: `${blog}/2021/09/el-contrato-de-compraventa.html`,
    lang: 'es',
    area: A.civil,
    excerpt: 'En el ámbito jurídico contamos con un amplio abanico de tipos de contrato…',
    photo: 'meeting4',
  },
  {
    title: 'TESTAMENTU BETEARAZLEA: ALBAZEA',
    date: '2020-11-10',
    url: `${blog}/2020/11/testamentu-betearazlea-albazea.html`,
    lang: 'eu',
    area: A.sucesiones,
    photo: 'officeDetail',
  },
  {
    title: 'Lan gatazkak konpontzeko prozedura autonomoak',
    date: '2020-11-09',
    url: `${blog}/2020/11/lan-gatazkak-konpontzeko-prozedura.html`,
    lang: 'eu',
    area: A.laboral,
    photo: 'officeRoom',
  },
  {
    title: 'GIZA BIZITZA INDEPENDENTEAREN ETA MENPEKO GIZA BIZITZAREN KONTRAKO DELITUAK',
    date: '2020-11-25',
    url: `${blog}/2020/11/giza-bizitza-independentearen-eta.html`,
    lang: 'eu',
    area: A.penal,
    photo: 'courthouse',
  },
  { title: 'Solicitud de nacionalidad española por residencia', date: '2021-09-15', url: `${blog}/2021/09/solicitud-de-nacionalidad-espanola-por.html`, lang: 'es', area: A.extranjeria },
  { title: 'Los daños causados de la circulación de vehículos a motor', date: '2021-09-29', url: `${blog}/2021/09/los-danos-causados-de-la-circulacion-de.html`, lang: 'es', area: A.seguros },
  { title: 'BAJA POR MATERNIDAD: ELEMENTOS FUNDAMENTALES, FAMILIA MONOPARENTAL, AUTONOMOS', date: '2021-09-16', url: `${blog}/2021/09/baja-por-maternidad-elementos.html`, lang: 'es', area: A.laboral },
  { title: 'Las condiciones generales de la contratación', date: '2021-09-10', url: `${blog}/2021/09/las-condiciones-generales-de-la.html`, lang: 'es', area: A.civil },
  { title: 'ASPECTOS FUNDAMENTALES DE LA INCAPACIDAD TEMPORAL', date: '2021-09-09', url: `${blog}/2021/09/aspectos-fundamentales-de-la.html`, lang: 'es', area: A.laboral },
  { title: 'Concurso de delitos y sus tipos', date: '2021-08-30', url: `${blog}/2021/08/concurso-de-delitos-y-sus-tipos.html`, lang: 'es', area: A.penal },
  { title: 'Las lesiones en sus diferentes gravedades', date: '2021-08-05', url: `${blog}/2021/08/las-lesiones-en-sus-diferentes.html`, lang: 'es', area: A.penal },
  { title: 'La delgada línea entre el delito de lesiones y la tentativa de homicidio', date: '2021-08-05', url: `${blog}/2021/08/la-delgada-linea-entre-el-delito-de.html`, lang: 'es', area: A.penal },
  { title: 'Comercio electrónico, ¿Cómo saber que es seguro?', date: '2021-07-20', url: `${blog}/2021/07/comercio-electronico-como-saber-que-es.html`, lang: 'es', area: A.civil },
  { title: 'Estafa informática o phishing', date: '2021-07-08', url: `${blog}/2021/07/estafa-informatica-o-phishing.html`, lang: 'es', area: A.penal },
  { title: 'Los modelos de cumplimiento normativo o compliance programs', date: '2021-06-22', url: `${blog}/2021/06/los-modelos-de-cumplimiento-normativo-o.html`, lang: 'es', area: A.penal },
  { title: 'Las personas jurídicas y el Código Penal en España', date: '2021-06-18', url: `${blog}/2021/06/las-personas-juridicas-y-el-codigo.html`, lang: 'es', area: A.penal },
  { title: 'EL PROCEDIMIENTO MONITORIO, UN SENCILLO INSTRUMENTO PARA EL COBRO DE DEUDAS', date: '2021-03-11', url: `${blog}/2021/03/el-procedimiento-monitorio-un-sencillo.html`, lang: 'es', area: A.civil },
  { title: 'SOCIEDADES COOPERATIVAS', date: '2021-02-25', url: `${blog}/2021/02/sociedades-cooperativas.html`, lang: 'es', area: A.mercantil },
  { title: 'Sociedades de capital o capitalistas', date: '2021-02-05', url: `${blog}/2021/02/de-capital-las-sociedades-de-capital-o.html`, lang: 'es', area: A.mercantil },
  { title: 'Sociedades personalistas: Rasgos y Tipos principales', date: '2021-02-03', url: `${blog}/2021/02/sociedades-personalistas-rasgos-y-tipos.html`, lang: 'es', area: A.mercantil },
  { title: 'Tipos de Sociedades Mercantiles: Clasificación Básica', date: '2021-02-03', url: `${blog}/2021/02/tipos-de-sociedades-mercantiles.html`, lang: 'es', area: A.mercantil },
  { title: 'HIPOTECA', date: '2020-11-20', url: `${blog}/2020/11/hipoteca.html`, lang: 'es', area: A.civil },
  { title: 'PROPIEDAD HORIZONTAL', date: '2020-11-13', url: `${blog}/2020/11/propiedad-horizontal.html`, lang: 'es', area: A.civil },
  { title: 'GLOVO Y LOS FALSOS AUTÓNOMOS (PARTE II)', date: '2020-10-15', url: `${blog}/2020/10/glovo-y-los-falsos-autonomos-parte-ii.html`, lang: 'es', area: A.laboral },
  { title: 'APLAZAMIENTO TEMPORAL DE LOS ERTE', date: '2020-12-01', url: `${blog}/2020/12/aplazamiento-temporal-de-los-erte.html`, lang: 'es', area: A.laboral },
]

/** Apariciones en prensa (titulares literales, en su idioma original + traducción publicada en el blog). */
export interface PressItem {
  outlet: string
  date: string
  url: string
  quote: Record<Lang, string>
}

export const press: PressItem[] = [
  {
    outlet: 'Diario Vasco',
    date: '2019-04-03',
    url: `${blog}/2021/03/diario-vasco-3-de-abril-de-2019-la.html`,
    quote: {
      es: 'La mediación soluciona conflictos y evita los juzgados.',
      eu: 'La mediación soluciona conflictos y evita los juzgados.',
    },
  },
  {
    outlet: 'Tolosaldeko Ataria',
    date: '2019-02-24',
    url: `${blog}/2021/03/tolosaldeako-ataria-2019ko-otsailaren.html`,
    quote: {
      es: 'Me parece importante agotar la vía de la mediación.',
      eu: 'Bitartekaritzaren bidea agortzea garrantzitsua iruditzen zait.',
    },
  },
  {
    outlet: 'Gipuzkoako Hitza',
    date: '2021-02-26',
    url: `${blog}/2021/03/gipuzkoako-hitza-2021eko-otsailaren-26a.html`,
    quote: {
      es: 'En los conflictos entre parientes debe trabajarse el aspecto emocional.',
      eu: 'Senideen arteko gatazketan emozioak landu behar dira.',
    },
  },
  {
    outlet: 'Tolosaldeko Ataria',
    date: '2020-06-05',
    url: `${blog}/2021/03/tolosaldeko-ataria-2020ko-ekainaren-5a.html`,
    quote: {
      es: 'Si bien son abogados, también trabajan la mediación, lo que abre dos puertas […]: recurrir a la vía judicial, así como a la vía de la mediación.',
      eu: 'Abokatuak dira, baina baita bitartekariak ere, eta horrek arazoen aurrean bi aukera eskaintzen dizkie bertaratzen direnei.',
    },
  },
]

/**
 * Testimonios: la web actual NO publica testimonios de clientes.
 * Se dejan vacíos a propósito; la sección se muestra automáticamente
 * cuando se añadan testimonios reales y autorizados.
 */
export interface Testimonial {
  text: Record<Lang, string>
  author?: string
}
export const testimonials: Testimonial[] = []
