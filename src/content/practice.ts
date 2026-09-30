import type { Lang } from '../i18n/routes'
import type { PhotoKey } from './photos'

/**
 * Áreas de práctica REALES publicadas en garrues.com.
 * Listados literales de cada página de área de la web actual.
 */
export interface PracticeArea {
  slug: string
  /** main = especialidades de Silvia (divorcios, familia, herencias, penal); other = resto de áreas */
  tier: 'main' | 'other'
  featured?: boolean
  photo?: PhotoKey
  name: Record<Lang, string>
  short: Record<Lang, string>
  items: Record<Lang, string[]>
}

export const practiceAreas: PracticeArea[] = [
{
    slug: 'divorcios',
    tier: 'main',
    featured: true,
    photo: 'meeting2',
    name: { es: 'Divorcios y separaciones', eu: 'Dibortzioak eta banantzeak' },
    short: {
      es: 'Su especialidad. Hijos, casa, bienes y acuerdos: te acompaña de principio a fin, buscando el acuerdo y siempre firme en mantener tus derechos.',
      eu: 'Bere espezialitatea. Seme-alabak, etxea, ondasunak eta akordioak: hasieratik amaierara lagunduko dizu, akordioa bilatuz eta zure eskubideak mantentzeko beti irmo.',
    },
    items: {
      es: [
        'Divorcios o separaciones',
        'Custodia de hijos',
        'Establecimiento de medidas paternofiliales',
        'Régimen económico matrimonial',
        'Liquidación de bienes gananciales',
        'Revisión de acuerdos',
        'Mediación',
      ],
      eu: [
        'Dibortzioak edo banantzeak',
        'Seme-alaben zaintza',
        'Guraso eta seme-alaben arteko neurriak ezartzea',
        'Ezkontzako ondasun-araubidea',
        'Irabazpidezko ondasunen likidazioa',
        'Akordioen berrikuspena',
        'Bitartekaritza',
      ],
    },
  },
  {
    slug: 'familia',
    tier: 'main',
    photo: 'silviaSeated',
    name: { es: 'Derecho de familia', eu: 'Familia-zuzenbidea' },
    short: {
      es: 'Divorcios, separaciones, custodia de hijos, acuerdos prematrimoniales y revisión de acuerdos. Con cercanía y con firmeza.',
      eu: 'Dibortzioak, banantzeak, seme-alaben zaintza, ezkontza aurreko akordioak eta akordioen berrikuspena. Hurbiltasunez eta irmotasunez.',
    },
    items: {
      es: [
        'Acuerdos previos al matrimonio o convivencia',
        'Custodia de hijos',
        'Crisis de pareja',
        'Divorcios o separaciones',
        'Revisión de acuerdos',
        'Régimen económico matrimonial',
        'Liquidación de bienes gananciales',
        'Establecimiento de medidas paternofiliales',
      ],
      eu: [
        'Ezkontza edo elkarbizitza aurreko akordioak',
        'Seme-alaben zaintza',
        'Bikote-krisiak',
        'Dibortzioak edo banantzeak',
        'Akordioen berrikuspena',
        'Ezkontzako ondasun-araubidea',
        'Irabazpidezko ondasunen likidazioa',
        'Guraso eta seme-alaben arteko neurriak ezartzea',
      ],
    },
  },
  {
    slug: 'herencias',
    tier: 'main',
    photo: 'officeDesk',
    name: { es: 'Herencias y sucesiones', eu: 'Jaraunspenak eta oinordetzak' },
    short: {
      es: 'Asesoramiento jurídico y fiscal para resolver tu herencia de forma rápida y económica, desde el testamento hasta el reparto.',
      eu: 'Aholkularitza juridiko eta fiskala zure jaraunspena azkar eta merke konpontzeko, testamentutik banaketaraino.',
    },
    items: {
      es: ['Testamentos', 'Cuestiones sucesorias', 'División de herencias', 'Repartos de herencia', 'Donaciones'],
      eu: ['Testamentuak', 'Oinordetza-gaiak', 'Jaraunspenen banaketa', 'Jaraunspen-banaketak', 'Dohaintzak'],
    },
  },
  {
    slug: 'penal',
    tier: 'main',
    photo: 'courthouse',
    name: { es: 'Derecho penal', eu: 'Zigor-zuzenbidea' },
    short: {
      es: 'Asesoramiento y defensa legal en derecho penal y penal económico, incluido el compliance penal de la empresa.',
      eu: 'Aholkularitza eta defentsa juridikoa zigor-zuzenbidean eta zigor-zuzenbide ekonomikoan, enpresaren compliance penala barne.',
    },
    items: {
      es: [
        'Delitos económicos',
        'Estafa y falsedad documental',
        'Apropiación indebida',
        'Delitos societarios',
        'Delitos contra las personas',
        'Delitos de violencia de género',
        'Negligencias médicas y profesionales',
        'Delitos de tráfico',
        'Compliance penal',
      ],
      eu: [
        'Delitu ekonomikoak',
        'Iruzurra eta dokumentu-faltsutzea',
        'Bidegabeko jabetzea',
        'Sozietate-delituak',
        'Pertsonen aurkako delituak',
        'Genero-indarkeriako delituak',
        'Zabarkeria mediko eta profesionalak',
        'Trafiko-delituak',
        'Compliance penala',
      ],
    },
  },
  {
    slug: 'violencia',
    tier: 'main',
    name: { es: 'Violencia de género y doméstica', eu: 'Genero-indarkeria eta etxeko indarkeria' },
    short: {
      es: 'Asesoramiento y defensa en delitos de violencia de género y en el ámbito familiar, con la discreción y la protección que cada caso exige.',
      eu: 'Aholkularitza eta defentsa genero-indarkeriako eta familia-eremuko delituetan, kasu bakoitzak eskatzen duen diskrezio eta babesarekin.',
    },
    items: {
      es: ['Delitos de violencia de género', 'Violencia en el ámbito familiar', 'Delitos contra las personas', 'Delito de lesiones', 'Medidas de protección'],
      eu: ['Genero-indarkeriako delituak', 'Familia-eremuko indarkeria', 'Pertsonen aurkako delituak', 'Lesio-delitua', 'Babes-neurriak'],
    },
  },
  {
    slug: 'mediacion',
    tier: 'other',
    photo: 'meeting1',
    name: { es: 'Mediación', eu: 'Bitartekaritza' },
    short: {
      es: 'Un mecanismo reconocido para resolver conflictos mediante el diálogo, la escucha y la proposición. Más rápido, menos gravoso.',
      eu: 'Gatazkak elkarrizketaren, entzutearen eta proposamenaren bidez konpontzeko mekanismo aitortua. Azkarragoa, merkeagoa.',
    },
    items: {
      es: ['Mediación familiar', 'Comunicación No Violenta', 'Círculos restaurativos', 'Negociación colaborativa'],
      eu: ['Familia-bitartekaritza', 'Komunikazio Ez-Bortitza', 'Zirkulu leheneratzaileak', 'Negoziazio kolaboratiboa'],
    },
  },
  {
    slug: 'civil',
    tier: 'other',
    name: { es: 'Derecho civil', eu: 'Zuzenbide zibila' },
    short: {
      es: 'Las relaciones entre particulares y sus patrimonios: reclamaciones, comunidades de vecinos, responsabilidad civil y más.',
      eu: 'Partikularren arteko harremanak eta haien ondareak: erreklamazioak, auzokide-erkidegoak, erantzukizun zibila eta gehiago.',
    },
    items: {
      es: [
        'Reclamaciones de cantidad',
        'Comunidades de vecinos',
        'Incapacitaciones',
        'Tutelas y curatelas',
        'Responsabilidad civil',
        'Propiedad horizontal',
        'Procedimientos judiciales',
        'Desahucio y eliminación de cláusulas suelo',
      ],
      eu: [
        'Kopuru-erreklamazioak',
        'Auzokide-erkidegoak',
        'Ezgaitzeak',
        'Tutoretzak eta kuradoretzak',
        'Erantzukizun zibila',
        'Jabetza horizontala',
        'Prozedura judizialak',
        'Etxegabetzeak eta lurzoru-klausulen ezabaketa',
      ],
    },
  },
  {
    slug: 'extranjeria',
    tier: 'other',
    name: { es: 'Extranjería', eu: 'Atzerritartasuna' },
    short: {
      es: 'Documentación, reagrupación familiar, nacionalidad, asilo y asesoría para obtener visados a los Estados Unidos.',
      eu: 'Dokumentazioa, familia-berrelkartzea, nazionalitatea, asiloa eta Estatu Batuetarako bisak lortzeko aholkularitza.',
    },
    items: {
      es: [
        'Tramitación de documentos',
        'Reagrupación familiar',
        'Nacionalidad',
        'Procedimientos de expulsión',
        'Procedimientos de asilo',
        'Visados a los Estados Unidos de América',
      ],
      eu: [
        'Dokumentuen izapidetzea',
        'Familia-berrelkartzea',
        'Nazionalitatea',
        'Kanporatze-prozedurak',
        'Asilo-prozedurak',
        'Amerikako Estatu Batuetarako bisak',
      ],
    },
  },
  {
    slug: 'laboral',
    tier: 'other',
    name: { es: 'Laboral y Seguridad Social', eu: 'Lana eta Gizarte Segurantza' },
    short: {
      es: 'El vínculo entre empresa y trabajador, y las garantías de la Seguridad Social ante determinados riesgos.',
      eu: 'Enpresaren eta langilearen arteko lotura, eta Gizarte Segurantzaren bermeak zenbait arriskuren aurrean.',
    },
    items: {
      es: ['Contratos', 'Despidos', 'Indemnizaciones', 'Accidentes laborales', 'Incapacidades'],
      eu: ['Kontratuak', 'Kaleratzeak', 'Kalte-ordainak', 'Lan-istripuak', 'Ezintasunak'],
    },
  },
  {
    slug: 'seguros',
    tier: 'other',
    name: { es: 'Seguros y tráfico', eu: 'Aseguruak eta trafikoa' },
    short: {
      es: 'Accidentes de tráfico, pólizas, siniestros y reclamaciones frente a las aseguradoras.',
      eu: 'Trafiko-istripuak, polizak, ezbeharrak eta aseguru-etxeen aurkako erreklamazioak.',
    },
    items: {
      es: ['Accidentes de tráfico', 'Planificación y contratación de pólizas', 'Gestión de siniestros', 'Reclamación frente a las aseguradoras'],
      eu: ['Trafiko-istripuak', 'Polizen plangintza eta kontratazioa', 'Ezbeharren kudeaketa', 'Aseguru-etxeen aurkako erreklamazioa'],
    },
  },
]
