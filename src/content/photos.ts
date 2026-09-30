/**
 * Inventario fotográfico.
 *
 * Todas las fotografías marcadas `origin: 'garrues.com'` son las ORIGINALES que
 * Silvia tiene publicadas hoy en su web (CDN de Wix). Se priorizan siempre.
 *
 * Las marcadas `origin: 'commons'` son fotografías de Tolosa con licencia libre
 * de Wikimedia Commons (la web actual no tiene fotos de Tolosa/Euskadi).
 * Sustitúyelas por fotografías propias de Silvia en cuanto las tengas.
 *
 * Antes de dar de baja Wix, ejecuta `npm run photos`: descarga todas las
 * imágenes, genera AVIF + WebP en 3 tamaños dentro de /public/photos y activa
 * automáticamente el modo local (sin depender de ningún CDN externo).
 */

export type PhotoOrigin = 'garrues.com' | 'commons'

export interface Photo {
  id: string
  origin: PhotoOrigin
  /** Identificador de fichero en el CDN de origen */
  file: string
  w: number
  h: number
  alt: { es: string; eu: string }
  /** Encuadre recomendado (object-position) */
  focus?: string
  credit?: string
}

const g = (
  id: string,
  file: string,
  w: number,
  h: number,
  es: string,
  eu: string,
  focus?: string,
): Photo => ({ id, origin: 'garrues.com', file, w, h, alt: { es, eu }, focus })

const c = (id: string, file: string, w: number, h: number, es: string, eu: string, credit: string): Photo => ({
  id,
  origin: 'commons',
  file,
  w,
  h,
  alt: { es, eu },
  credit,
})

export const photos = {
  // — Identidad
  adosLogo: g('adosLogo', '870ea8_c429dce1ddc44970987090c2cf8e3b6f~mv2.png', 1181, 723, 'Logotipo de ADOS Abokatuak eta Bitartekariak', 'ADOS Abokatuak eta Bitartekariak logotipoa'),
  logo: g('logo', '870ea8_bcb0f3ec6f634401a14d7eaf0d323264~mv2.png', 1000, 1000, 'Logotipo de Silvia Garrues Remírez', 'Silvia Garrues Remírezen logotipoa'),
  logoSignature: g('logoSignature', '870ea8_fee71f7f3bb44bcaa7a06c6fbba5fd7c~mv2.png', 740, 448, 'Logotipo y firma de Silvia Garrues Remírez', 'Silvia Garrues Remírezen logotipoa eta sinadura'),
  ulpiano: g('ulpiano', '870ea8_5abb47fa452e4ade88f0dc52994f7fa7~mv2.jpg', 1200, 1200, 'Busto clásico de Ulpiano, jurista romano', 'Ulpiano jurista erromatarraren bustoa', '50% 30%'),

  // — Silvia
  silviaDesk: g('silviaDesk', '870ea8_6cc5c0e19d9f472e95d7c9dfb8989320~mv2.jpg', 1200, 900, 'Silvia Garrues Remírez en su despacho, junto a una balanza de la justicia', 'Silvia Garrues Remírez bere bulegoan, justiziaren balantzaren ondoan', '66% 30%'),
  silviaPortrait: g('silviaPortrait', '870ea8_374b1799b45344eabbec39678e2ab5b5~mv2.jpg', 900, 1200, 'Retrato de Silvia Garrues Remírez', 'Silvia Garrues Remírezen erretratua', '50% 25%'),
  silviaRedFolder: g('silviaRedFolder', '870ea8_034263903187470a9636c3b2c6fa5f5a~mv2.jpg', 1000, 1000, 'Silvia Garrues Remírez con una carpeta roja', 'Silvia Garrues Remírez karpeta gorri batekin', '50% 30%'),
  silviaStanding: g('silviaStanding', '870ea8_4533b07596c940dda55d5f3303aa2fa6~mv2.jpg', 1400, 1050, 'Silvia Garrues Remírez de pie junto a su mesa de trabajo', 'Silvia Garrues Remírez zutik bere lan-mahaiaren ondoan', '52% 35%'),
  silviaSeated: g('silviaSeated', '870ea8_47ecb20f77b245529f00fe5a331f0903~mv2.jpg', 800, 1100, 'Silvia Garrues Remírez sentada en el despacho', 'Silvia Garrues Remírez eserita bulegoan', '50% 30%'),
  silviaEntrance: g('silviaEntrance', '870ea8_5919a654a9ed4bc08624620351ba374f~mv2.jpg', 900, 1300, 'Silvia Garrues Remírez a la entrada de un edificio', 'Silvia Garrues Remírez eraikin baten sarreran', '50% 40%'),
  silviaStreet: g('silviaStreet', '870ea8_53f0411121d4492aba9d037c184002c6~mv2.jpg', 900, 1200, 'Silvia Garrues Remírez caminando frente a un edificio acristalado', 'Silvia Garrues Remírez beirazko eraikin baten aurrean oinez', '50% 40%'),
  courthouse: g('courthouse', '870ea8_a3e2a11a6a7240f6960794bb22854d62~mv2.jpg', 900, 1200, 'Silvia Garrues Remírez en el interior de un edificio institucional', 'Silvia Garrues Remírez erakunde-eraikin baten barruan', '50% 45%'),
  meeting1: g('meeting1', '870ea8_9e94d679427846f1a24d78f951788146~mv2_d_1600_1200_s_2.jpg', 1600, 1200, 'Silvia Garrues Remírez revisando documentación en una reunión', 'Silvia Garrues Remírez bilera batean dokumentazioa aztertzen', '50% 40%'),
  meeting2: g('meeting2', '870ea8_73d495dc8af847dba20313c54ec8d7ca~mv2_d_1368_1600_s_2.jpg', 1368, 1600, 'Silvia Garrues Remírez firmando documentos en una reunión', 'Silvia Garrues Remírez bilera batean dokumentuak sinatzen', '50% 40%'),
  meeting3: g('meeting3', '870ea8_419d68c0b2b943b59936f5fb1319cb13~mv2_d_1600_1528_s_2.jpg', 1600, 1528, 'Reunión de trabajo en el despacho', 'Lan-bilera bulegoan', '50% 40%'),
  meeting4: g('meeting4', '870ea8_9819238ad7384d338a5af586d82cbdee~mv2_d_1600_1200_s_2.jpg', 1600, 1200, 'Reunión en una sala con vistas a la ciudad', 'Bilera hiriaren gaineko bistak dituen gela batean', '50% 45%'),
  withColleague: g('withColleague', '870ea8_f022e139495d4c9a9d6ccff55a8a278e~mv2.jpg', 900, 1100, 'Silvia Garrues Remírez en un encuentro profesional', 'Silvia Garrues Remírez topaketa profesional batean', '50% 30%'),
  event: g('event', '870ea8_ea5b5a3499254604adccd96cf8115e64~mv2.jpg', 1200, 900, 'Silvia Garrues Remírez con colegas en un acto profesional', 'Silvia Garrues Remírez lankideekin ekitaldi profesional batean', '50% 35%'),

  // — Despacho (Tolosa)
  officeDoor: g('officeDoor', '870ea8_75a7a65159f54215862bdbfa5af746bc~mv2.jpg', 900, 1200, 'Entrada del despacho en Paseo Pedro de Tolosa, Tolosa', 'Bulegoaren sarrera, Pedro de Tolosa pasealekuan, Tolosan', '50% 50%'),
  officeWaiting: g('officeWaiting', '870ea8_e952c224de014ca5b5f7567434d6d496~mv2.jpg', 1200, 900, 'Sala de espera del despacho con el logotipo en la pared', 'Bulegoko itxarongela, logotipoa horman duela', '50% 50%'),
  officeDesk: g('officeDesk', '870ea8_641618834c524ca8b0a3b415a6b05d0e~mv2.jpg', 1300, 900, 'Mesa de trabajo en el despacho', 'Lan-mahaia bulegoan', '50% 50%'),
  officeRoom: g('officeRoom', '870ea8_8eda373f861c49d3ac7278b9c731b49e~mv2.jpg', 1200, 900, 'Espacio de trabajo luminoso del despacho', 'Bulegoko lan-gune argitsua', '50% 50%'),
  officeDetail: g('officeDetail', '870ea8_17eb8047080747fa8bade65d7cb8da51~mv2.jpg', 900, 1200, 'Detalle del despacho', 'Bulegoaren xehetasuna', '50% 50%'),
  library: g('library', '11062b_9178320b19b24544a684def84b440bc2~mv2.jpg', 1600, 1000, 'Biblioteca jurídica y firma de documentos', 'Liburutegi juridikoa eta dokumentuen sinadura', '50% 60%'),

  // — Tolosa / Euskadi (Wikimedia Commons — sustituir por fotos propias)
  tolosaOria: c('tolosaOria', 'Tolosa_Oria_2009-09-09.JPG', 2000, 1333, 'El río Oria a su paso por Tolosa', 'Oria ibaia Tolosatik igarotzean', 'Wikimedia Commons'),
  tolosaTown: c('tolosaTown', 'Tolosa._2011._Euskal_Herria.JPG', 2000, 1333, 'Vista de Tolosa, Gipuzkoa', 'Tolosaren ikuspegia, Gipuzkoa', 'Wikimedia Commons'),
  tolosaChurch: c('tolosaChurch', 'Tolosa_Molino_Iglesia_Santa_Maria_DSC00032.JPG', 2000, 1500, 'Iglesia de Santa María y el antiguo molino en Tolosa', 'Santa Maria eliza eta errota zaharra Tolosan', 'Wikimedia Commons'),
  tolosaRiver: c('tolosaRiver', 'Tolosa_Rio_Araxes_DSC00025.JPG', 2000, 1500, 'Río Araxes en Tolosa', 'Araxes ibaia Tolosan', 'Wikimedia Commons'),
} satisfies Record<string, Photo>

export type PhotoKey = keyof typeof photos

/** Secuencia de la película fotográfica (marquee). Alterna Silvia · Tolosa · despacho. */
export const marqueeSequence: PhotoKey[] = [
  'silviaDesk',
  'meeting1',
  'officeWaiting',
  'silviaRedFolder',
  'meeting2',
  'officeRoom',
  'silviaSeated',
  'event',
  'officeDesk',
  'silviaEntrance',
  'meeting4',
  'officeDoor',
  'withColleague',
  'silviaStanding',
]
