import type { Lang } from '../i18n/routes'

/** Textos de la portada (estilo Leome). Solo información auténtica del despacho. */
export const home: Record<
  Lang,
  {
    line1: string
    line2: string
    frameTitle: string
    frameText: string
    statement: string
    areasTitle: string
    areasAll: string
    otherAreas: string
    teamTitle: [string, string]
    teamLink: string
    insightsTitle: string
    insightsAll: string
    scroll: string
  }
> = {
  es: {
    line1: 'Abogada de familia',
    line2: 'con calma',
    frameTitle: 'Tu caso. Nuestro foco.',
    frameText: 'Primero, el diálogo. Si no hay acuerdo, firmeza en el juzgado.',
    statement:
      'Un divorcio, una herencia o un proceso penal no deberían vivirse en soledad. Silvia te escucha, te explica cada paso con claridad y busca el acuerdo, siempre firme en mantener tus derechos.',
    areasTitle: 'Nuestras áreas\nde especialidad',
    areasAll: 'Todas las áreas',
    otherAreas: 'También te ayudamos en',
    teamTitle: ['Cercanía que marca la diferencia.', 'Con calma y con firmeza.'],
    teamLink: 'Conoce a Silvia',
    insightsTitle: 'Últimos artículos',
    insightsAll: 'Ver todos',
    scroll: 'Desliza',
  },
  eu: {
    line1: 'Familia-abokatua',
    line2: 'lasaitasunez',
    frameTitle: 'Zure kasua. Gure ardatza.',
    frameText: 'Lehenik, elkarrizketa. Akordiorik ez badago, irmotasuna epaitegian.',
    statement:
      'Dibortzio bat, jaraunspen bat edo zigor-prozesu bat ez lirateke bakarrik bizi behar. Silviak entzun egiten dizu, urrats bakoitza argi azaltzen dizu eta akordioa bilatzen du, zure eskubideak mantentzeko beti irmo.',
    areasTitle: 'Gure\nespezialitateak',
    areasAll: 'Arlo guztiak',
    otherAreas: 'Hauetan ere laguntzen dizugu',
    teamTitle: ['Aldea egiten duen hurbiltasuna.', 'Lasaitasunez eta irmotasunez.'],
    teamLink: 'Ezagutu Silvia',
    insightsTitle: 'Azken artikuluak',
    insightsAll: 'Ikusi guztiak',
    scroll: 'Irristatu',
  },
}
