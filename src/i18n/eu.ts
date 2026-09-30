import type { Dict } from './es'

/**
 * Euskarazko testuak.
 * OHARRA: itzulpen hau gaztelaniazko jatorrizko edukitik egina dago.
 * Argitaratu aurretik Silviak (edo euskara-zuzentzaile batek) berrikustea gomendatzen da.
 * *Izartxoen* arteko hitzak serif letra etzanean konposatzen dira.
 */
const eu: Dict = {
  meta: {
    home: {
      title: 'Silvia Garrues Remírez · Abokatua eta bitartekaria Tolosan, Gipuzkoan',
      description:
        'Gipuzkoako eta Madrilgo abokatu-elkargoetako kidea, Estatu Batuetako ibilbidearekin. Familia-zuzenbidea, dibortzioak, bitartekaritza, oinordetzak, zibila, zigor-zuzenbidea, atzerritartasuna eta lan-zuzenbidea. Tolosa · Gaztelania, euskara eta ingelesa.',
    },
    silvia: {
      title: 'Silvia Garrues Remírez · Ibilbidea',
      description:
        'Tolosatik Houstonera eta itzuli: University of Houston Law Center, 8 urte Busby & Associates bulegoarekin Texasen, Madrilen jardun eta bulego propioa Tolosan.',
    },
    services: {
      title: 'Jarduera-arloak · Silvia Garrues Remírez, abokatua',
      description:
        'Familia-zuzenbidea, bitartekaritza, jaraunspenak eta oinordetzak, zuzenbide zibila, zigor-zuzenbidea, atzerritartasuna, lana eta gizarte-segurantza, aseguruak eta trafikoa. Bulegoa Tolosan.',
    },
    articles: {
      title: 'Pentsamendua eta Zuzenbidea · Silvia Garrues Remírezen artikuluak',
      description: 'Silvia Garrues Remírezen eta ADOS bulegoaren artikuluak, gogoeta juridikoak eta prentsan agertutakoak.',
    },
    contact: {
      title: 'Harremanetarako · Silvia Garrues Remírez, abokatua Tolosan',
      description: 'Pedro de Tolosa pasealekua, 1 · 20400 Tolosa. Telefonoa 943 65 10 11 · +34 683 66 93 83 · silvia@garrues.com',
    },
    legal: { title: 'Lege-oharra · Silvia Garrues Remírez', description: 'garrues.com webgunearen lege-oharra.' },
    privacy: { title: 'Pribatutasun-politika · Silvia Garrues Remírez', description: 'Pribatutasun-politika eta datuen babesa.' },
    cookies: { title: 'Cookie-politika · Silvia Garrues Remírez', description: 'Cookien erabilerari buruzko informazioa.' },
  },

  ui: {
    skip: 'Joan edukira',
    home: 'Hasiera',
    silvia: 'Silvia',
    services: 'Zerbitzuak',
    articles: 'Artikuluak',
    contact: 'Harremanetarako',
    consult: 'Kontsulta',
    menu: 'Menua',
    close: 'Itxi',
    legal: 'Lege-oharra',
    privacy: 'Pribatutasuna',
    cookies: 'Cookieak',
    langLabel: 'Hizkuntza',
    langNames: { es: 'Castellano', eu: 'Euskara' },
    readMore: 'Gehiago jakin',
    readArticle: 'Artikulua irakurri',
    back: 'Itzuli hasierara',
    prev: 'Aurrekoa',
    next: 'Hurrengoa',
    originalLang: { es: 'Gaztelaniaz', eu: 'Euskaraz' },
    photoCredit: 'Argazkia',
  },

  hero: {
    role: 'Abokatua eta bitartekaria',
    credential: 'Dibortzioak · Familia · Jaraunspenak eta oinordetzak · Zigor-zuzenbidea',
    title: 'Familia bat banatzen denean, *norbaitek jarri behar du ordena.*',
    paragraphs: [
      'Silvia Garrues Remírez familia-zuzenbidean aditua da: dibortzioak, banantzeak, seme-alaben zaintza, ezkontza aurreko akordioak eta akordioen aldaketak. Jaraunspenak, oinordetzak eta zigor-arloko gaiak ere eramaten ditu.',
      'Lehenik, elkarrizketa: bitartekaritza aukera eraginkorra, merkeagoa eta azkarragoa da. Akordiorik ez badago, epaiketara, zure eskubideak mantentzeko beti irmo.',
      '15 urtetik gorako esperientzia. Gaztelaniaz, euskaraz eta ingelesez.',
    ],
    ctaPrimary: 'Kontsultatu zure kasua',
    ctaSecondary: 'Ezagutu Silvia',
    photoCaption: 'Silvia Garrues Remírez bere bulegoan',
  },

  intro: {
    label: 'Sarrerako filma',
    scenes: [
      'Proiektu komun bat.',
      'Bideak banatzen diren arte.',
      'Etxea, autoa, seme-alabak… dena da eztabaidagai.',
      'Orduan iristen da lasaitasuna.',
    ],
    finale: 'Silviak gauzak argi eta garbi jartzen ditu.',
    skip: 'Saltatu',
    replay: 'Berriro ikusi',
  },

  facts: [
    { value: '15+', label: 'urteko esperientzia familia-zuzenbidean eta bitartekaritzan' },
    { value: '2', label: 'abokatu-elkargo: Gipuzkoa eta Madril' },
    { value: '3', label: 'hizkuntza: gaztelania, euskara eta ingelesa' },
  ],

  specialties: {
    kicker: 'Espezialitateak',
    title: 'Dibortzioak, familia, jaraunspenak. *Eta behar denean, zigor-arloa.*',
    intro: 'Zuzenbidearen edozein adarretan aholkatzen du, baina bere lana gehien jokoan dagoen lekuan biltzen da: familian.',
    others: 'Honetan ere aholkatzen du:',
  },

  divorce: {
    kicker: 'Dibortzioak',
    title: 'Banantzen *ari zara?*',
    intro: 'Dibortzioa ez da paper bat bakarrik. Zure seme-alabak, zure etxea eta zure lasaitasuna dira. Silviak pieza bakoitza ordenatzen lagunduko dizu, lasai eta garrantzitsuan amore eman gabe.',
    stakes: [
      { title: 'Seme-alabak', text: 'Seme-alaben zaintza eta guraso eta seme-alaben arteko neurriak, haien ongizatea kontuan hartuta.' },
      { title: 'Etxea eta ondasunak', text: 'Ezkontzako ondasun-araubidea eta irabazpidezko ondasunen likidazioa.' },
      { title: 'Akordioak', text: 'Ezkontza edo elkarbizitza aurreko akordioak, eta akordioen berrikuspena bizitza aldatzen denean.' },
    ],
    pathTitle: 'Bidea',
    quote: 'Gure jarrera profesionalak puntu komunak aurkitzen lagunduko dizu, egoerarik zailenetan ere, baina beti izango gara irmoak zure eskubideak mantentzen.',
    quoteSource: 'ADOS · Abokatuak eta Bitartekariak',
  },

  film: { label: 'Silvia · Tolosa · Zuzenbidea' },

  silvia: {
    kicker: 'Silvia',
    title: 'Gatazkaren erdian *behar duzun lasaitasuna.*',
    lead:
      'Silvia Gipuzkoako eta Madrilgo abokatu-elkargoetako kidea da. Nazioarteko ibilbidea du sistema judizial klasikoan, eta ezaguna da, ahal den guztietan, bitartekaritza gatazkak konpontzeko bide alternatibo gisa erabiltzeagatik.',
    chapters: [
      {
        place: 'Prestakuntza',
        title: 'Bitartekaritzan aditua',
        text: 'Urrutiko Hezkuntzako Unibertsitate Nazionalean (UNED) tituludun, hainbat titulu ditu, besteak beste Rey Juan Carlos Unibertsitateko Bitartekaritzan Aditu titulua.',
      },
      {
        place: 'Esperientzia',
        title: '15 urte baino gehiago',
        text: 'Ibilbide horretan, 8 urte Ipar Amerikako sistema judizialean eta jarduna Madrilen eta Gipuzkoan. Auzia ebaztera eta gatazka konpontzera bideratutako bulegoa.',
      },
      {
        place: 'Elkargokide',
        title: 'Gipuzkoa eta Madril',
        text: 'Gipuzkoako eta Madrilgo abokatu-elkargoetako kidea. Gaztelaniaz, euskaraz eta ingelesez ematen du arreta.',
      },
    ],
    quote: 'Bitartekaritzaren bidea agortzea garrantzitsua iruditzen zait.',
    quoteSource: 'Silvia Garrues, Tolosaldeko Ataria, 2019',
    cta: 'Irakurri bere ibilbide osoa',
  },

  roots: {
    kicker: 'Tolosa · Gipuzkoa',
    title: 'Sustraiak *Tolosan.* Begirada *mundura irekia.*',
    text: 'Tolosa du jatorri, eta gaur egun hortik egiten du lan, Pedro de Tolosa pasealekuan. Tartean, Houston eta Madril. Ibilbide horretatik sortu da lan egiteko modu bat: prozesu judizialaren zorroztasuna eta Estatu Batuetan ezagututako bitartekaritzaren kultura uztartzen dituena.',
    caption: 'Oria ibaia Tolosatik igarotzean',
  },

  practice: {
    kicker: 'Jarduera-arloak',
    title: 'Zuzenbidearen *edozein adarretan* aholkatzen dugu.',
    intro:
      'Familia-zuzenbideari eta bitartekaritzari arreta berezia emanez. Arlo bakoitzaren atzean metodo bera: kasua xehetasunez aztertu eta irtenbiderik eraginkorrena eta merkeena bilatu.',
    all: 'Ikusi arlo guztiak',
  },

  approach: {
    kicker: 'Metodoa',
    title: 'Zu *defendatzeko* hiru ikuspegi.',
    items: [
      { name: 'Juridikoa', text: 'Tresna juridikoari esker, kasuak indarrean dagoen araudia eta jurisprudentzia aplikatuz aztertzen ditugu.' },
      { name: 'Komunikazio Ez-Bortitza', text: 'Komunikazio Ez-Bortitzak pertsonekin emozionalki konektatzen eta haien giza beharrak identifikatzen laguntzen digu.' },
      { name: 'Tresna sistemikoak', text: 'Tresna sistemikoak ezkutuko dinamikak antzematen eta gatazkari bere jatorritik heltzen laguntzen digu.' },
    ],
    during: 'Prozesuan zehar Zuzenbide hau erabiltzen dugu:',
    modes: ['kolaboratiboa', 'eraikitzailea', 'leheneratzailea'],
    offer: ['Giro hurbila', 'Esperientzia egiaztagarria', 'Eraginkortasuna kostu kontrolatuekin', 'Enpatia eta eraikitzailetasuna'],
  },

  ulpiano: {
    kicker: 'Pentsamendua eta Zuzenbidea',
    quote: 'Justizia bakoitzari *berea* emateko ohitura da.»',
    author: 'Ulpiano',
    note: 'Silviak bere bulegoa aurkezteko aukeratutako aipua. III. mendeko jurista erromatarra; haren justizia-definizioak Europako tradizio juridikoaren erdigunean jarraitzen du.',
  },

  articles: {
    kicker: 'Pentsamendua eta Zuzenbidea',
    title: 'Testu *propioak.*',
    intro: 'Bulegoak bere blogean argitaratutako artikuluak, eta Silviaren ahotsa euskal prentsan.',
    pressTitle: 'Prentsan',
    blogTitle: 'Blogetik',
    all: 'Ikusi artikulu guztiak',
    onBlog: 'Ikusi blog osoa',
  },

  press: {
    kicker: 'Prentsan',
    title: 'Euskal prentsa, *bere lanaz.*',
  },

  international: {
    kicker: 'Nazioarteko esperientzia',
    title: '*Houston* eta *Tolosa* artean.',
    text: 'Silviak barrutik ezagutzen ditu bi kultura juridiko: Ipar Amerikakoa, 8 urtez lan egin zuena, eta Espainiakoa, Madrilen eta Gipuzkoan jardun duena. Begirada bikoitz hori bezero bakoitzaren zerbitzura jartzen du gaur, nazioarteko osagaia duten gaietan ere.',
    places: [
      { city: 'Tolosa', region: 'Gipuzkoa', detail: 'Jatorria eta bulegoa' },
      { city: 'Houston', region: 'Texas, AEB', detail: 'University of Houston Law Center · Busby & Associates' },
      { city: 'Madril', region: 'Espainia', detail: 'Espainiako sistema judizialean jarduna' },
      { city: 'Tolosa', region: 'Gipuzkoa', detail: 'ADOS' },
    ],
    visas: 'Amerikako Estatu Batuetarako bisak lortzeko aholkularitza.',
  },

  cta: {
    title: 'Hitz egin dezagun *zure kasuaz.*',
    text: 'Kontatu zer gertatzen den. Lasai entzungo dizugu eta argi esango dizugu zein bidek duen zentzu gehiago: akordioak ala epaitegiak.',
    button: 'Eskatu kontsulta',
  },

  contact: {
    kicker: 'Harremanetarako',
    title: 'Silviarekin hitz egitea *erraza* da.',
    intro: 'Aurrez aurreko hitzorduak Tolosako bulegoan, ordutegi malguarekin, zure bizimodura egokituta. Formularioaren bidez ere idatz dezakezu.',
    phone: 'Telefonoa',
    email: 'Posta elektronikoa',
    office: 'Bulegoa',
    howToArrive: 'Nola iritsi',
    bizum: 'Bizum bidezko ordainketak onartzen ditugu',
    skype: 'Skype',
    form: {
      title: 'Idatzi iezaguzu',
      name: 'Izena',
      email: 'Posta elektronikoa',
      phone: 'Telefonoa',
      reason: 'Kontsultaren arrazoia',
      reasonPlaceholder: 'Hautatu arlo bat',
      other: 'Beste gai bat',
      message: 'Mezua',
      privacy: 'Irakurri eta onartzen dut',
      privacyLink: 'pribatutasun-politika',
      submit: 'Bidali kontsulta',
      sending: 'Bidaltzen…',
      success: 'Eskerrik asko. Zure kontsulta jaso dugu eta ahalik eta lasterren erantzungo dizugu.',
      mailto: 'Zure posta-programa ireki da mezua prest duela. Bidaltzea besterik ez duzu.',
      error: 'Ezin izan da bidali. Idatzi zuzenean silvia@garrues.com helbidera.',
      required: 'Derrigorrezko eremua',
      disclaimer:
        'Formulario hau bidaltzeak ez du abokatu-bezero harremanik sortzen, ezta enkargua onartzea ere. Mesedez, ez sartu informazio konfidentzialik zure gaiaz ardura gaitezkeela baieztatu arte.',
      rgpd: 'Arduraduna: Silvia Garrues Remírez. Helburua: zure kontsultari erantzutea. Legitimazioa: zure baimena. Ez zaie daturik lagako hirugarrenei, legezko betebeharrik ez badago. Sartzeko, zuzentzeko eta ezabatzeko eskubideak erabil ditzakezu silvia@garrues.com helbidera idatzita.',
    },
  },

  footer: {
    tagline: 'Abokatua eta bitartekaria · Tolosa, Gipuzkoa',
    rights: 'Eskubide guztiak erreserbatuta.',
  },

  pages: {
    silvia: {
      kicker: 'Ibilbidea',
      title: 'Silvia Garrues *Remírez.*',
      intro:
        'ADOSen sortzailea: diziplina anitzeko bulego moderno eta humanista, mota askotako aholkularitzak egiteko eta prozesu judizialak eramateko profesional oso kualifikatuak dituena.',
      mediationTitle: 'Zergatik *bitartekaritza.*',
      mediationText: [
        'Bitartekaritza gatazkak konpontzeko mekanismo alternatibo aitortua da: bi pertsonak edo gehiagok beren auziak elkarrizketaren, entzutearen eta proposamenaren bidez konpon ditzakete.',
        'Silviak Estatu Batuetan jardutean ezagutu zuen. Gaur Tolosan aplikatzen du, bezeroaren eskubideak hobekien babesten dituena bide judiziala denean horri uko egin gabe.',
      ],
      pressQuote: 'Bitartekaritzaren bidea agortzea garrantzitsua iruditzen zait.',
      pressSource: 'Tolosaldeko Ataria, 2019ko otsailaren 24a',
      languages: 'Lan-hizkuntzak',
      languagesList: ['Gaztelania', 'Euskara', 'Ingelesa'],
      bars: 'Elkargokide',
      barsList: ['Gipuzkoako Abokatuen Elkargoa', 'Madrilgo Abokatuen Elkargoa'],
    },
    services: {
      kicker: 'Zerbitzuak',
      title: 'Jarduera-*arloak.*',
      intro: 'Zuzenbidearen edozein adarretan lagun zaitzakegu. Hauek dira bulegoak ohiko moduan lantzen dituen arloak.',
      weHelp: 'Honetan lagun zaitzakegu',
      mediationTitle: 'Bitartekaritza, *urratsez urrats.*',
      mediationSteps: [
        { title: 'Bitartekaritza', text: 'Aldeek, hirugarren neutral batekin, akordio propio bat bilatzen dute elkarrizketaren bidez.' },
        { title: 'Akordioa eta ebazpena', text: 'Akordioa badago, formalizatu egiten da eta gatazka azkarrago eta merkeago konpontzen da.' },
        { title: 'Akordiorik ez badago', text: 'Auzibide kontentziosora jotzen da, zure eskubideen defentsan irmotasun berarekin.' },
      ],
      benefitsTitle: 'Bitartekaritzaren onurak',
      benefits: [
        'Sistema judizialaren zama arintzen du.',
        'Azkarragoa eta merkeagoa da.',
        'Gatazka modu baketsuan konpontzen du: denek irabazten dute.',
        'Borondatezkoa da: bi aldeek akordio batera iristeko konpromisoa hartzen dute, gatazka gehiagorik gehitu gabe.',
        'Harremanak auzi batek dakarren higaduratik babesten ditu.',
        'Irtenbideak aldeek beraiek proposatzen dituzte.',
      ],
    },
    articles: {
      kicker: 'Pentsamendua eta Zuzenbidea',
      title: 'Artikuluak eta *prentsa.*',
      intro: 'Bulegoaren blogean argitaratutako testuen eta Silviak hedabideetan izandako presentziaren hautaketa. Artikulu osoak jatorrizko blogean gordetzen dira, jatorrizko hizkuntzan.',
      filterAll: 'Guztiak',
    },
    contact: {
      kicker: 'Harremanetarako',
      title: 'Kontsultatu zure *kasua.*',
    },
    legal: {
      title: 'Lege-oharra',
      pending:
        'Dokumentua prestatzen ari da. Webgunea argitaratu aurretik, titularraren identifikazio-datuekin osatu behar da (izena, IFZ, elkargokide-zenbakia eta elkargo profesionala).',
    },
    privacy: {
      title: 'Pribatutasun-politika',
      pending:
        'Dokumentua prestatzen ari da. Webgunea argitaratu aurretik, DBEO eta DBLO-rekin bat idatzi behar da: arduraduna, helburuak, legitimazioa, kontserbazioa eta eskubideak.',
    },
    cookies: {
      title: 'Cookie-politika',
      pending:
        'Webgune honek ez du analitika- edo publizitate-cookierik erabiltzen. Etorkizunean gehitzen badira, dokumentu hau eta baimen-oharra eguneratu beharko dira.',
    },
    notFound: { title: 'Ez da orria aurkitu', text: 'Bilatzen ari zaren orria ez dago edo helbidez aldatu da.' },
  },
}

export default eu
