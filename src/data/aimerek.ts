export type GalleryCategory = 'Оқу' | 'Infologia' | 'Кураторлық' | 'Естеліктер'

export interface GalleryItem {
  src: string
  fullSrc?: string
  alt: string
  caption?: string
  category: GalleryCategory
  width?: number
  height?: number
}

export interface Achievement {
  title: string
  value?: string | number | null
  year?: number | null
  description?: string | null
  image?: string | null
}

export interface AimerekData {
  name: string
  heroImage: string | null
  biography: string | null
  untScore: number | null
  untYear: number | null
  infologiaStory: string | null
  curatorStory: string | null
  achievements: Achievement[]
  gallery: GalleryItem[]
  quotes: string[]
  interests: string[]
  favoriteArtists: string[]
  favoriteSongs: string[]
  volleyball: string | null
  musicPreferencesConfirmed: boolean
}

export const aimerek: AimerekData = {
  name: 'Аймерек апай',
  heroImage: 'images/optimized/personal-studio-portrait-24-curated.webp',
  biography: null,
  untScore: 98,
  untYear: 2026,
  infologiaStory:
    'Ұсынылған материалдар Аймерек апайдың Infologia-дағы оқу жолында preSENIOR және SENIOR топтарына қабылданғанын растайды.',
  curatorStory:
    'Ұсынылған материалда Қасыбек Аймерек INFO-32 тобының кураторы ретінде көрсетілген.',
  achievements: [
    {
      title: 'ҰБТ нәтижесі — 98 балл',
      value: 98,
      year: 2026,
      description:
        '2026 жылғы 25 маусымдағы ҰБТ нәтижесі — 98 балл. Нәтиже жеке қорытынды парақпен және ресми тізімдегі жазбамен расталды.',
      image: 'images/optimized/infologia/unt-result-98-09.webp',
    },
    {
      title: 'INFO-32 тобының кураторы',
      description: 'Команда таныстырылымында Қасыбек Аймерек INFO-32 тобының кураторы ретінде көрсетілген.',
      image: 'images/optimized/curator-info32-proof-27-curated.webp',
    },
    {
      title: 'preSENIOR тобына қабылдануы',
      description: 'Infologia-ның үздік оқушыларынан құралған preSENIOR тобына қабылданғаны ұсынылған материалмен расталды.',
      image: 'images/optimized/infologia/infologia-presenior-03.webp',
    },
    {
      title: 'SENIOR тобына қабылдануы',
      description: 'Infologia-ның үздік оқушыларынан құралған SENIOR тобына қабылданғаны ұсынылған материалмен расталды.',
      image: 'images/optimized/infologia/infologia-senior-collage-05.webp',
    },
    {
      title: 'Infologia сертификаттары',
      description: 'Оқу кезеңіндегі нәтижелерге байланысты сертификаттар мен марапаттар көрсетілген.',
      image: 'images/optimized/infologia/infologia-certificate-story-01.webp',
    },
  ],
  gallery: [
    {
      src: 'images/optimized/personal-studio-portrait-24-curated.webp',
      fullSrc: 'images/optimized/personal-studio-portrait-24.webp',
      alt: 'Аймерек апайдың ашық фонда түсірілген студиялық портреті',
      caption: 'Нәзік портрет',
      category: 'Естеліктер',
      width: 470,
      height: 588,
    },
    {
      src: 'images/optimized/personal-studio-seated-25-curated.webp',
      fullSrc: 'images/optimized/personal-studio-seated-25.webp',
      alt: 'Аймерек апайдың орындықта отырған студиялық портреті',
      caption: 'Сабырлы сәт',
      category: 'Естеліктер',
      width: 470,
      height: 588,
    },
    {
      src: 'images/optimized/curator-info32-proof-27-curated.webp',
      fullSrc: 'images/optimized/curator-info32-proof-27.webp',
      alt: 'Қасыбек Аймеректің INFO-32 кураторы екенін көрсететін команда таныстырылымы',
      caption: 'INFO-32 · кураторлық жолы',
      category: 'Кураторлық',
      width: 591,
      height: 739,
    },
    {
      src: 'images/optimized/education-astana-it-university-26-curated.webp',
      fullSrc: 'images/optimized/education-astana-it-university-26.webp',
      alt: 'Astana IT University ғимаратының сыртқы көрінісі',
      caption: 'Astana IT University атмосферасы',
      category: 'Оқу',
      width: 591,
      height: 739,
    },
    {
      src: 'images/optimized/personal-prom-blue-21-curated.webp',
      fullSrc: 'images/optimized/personal-prom-blue-21.webp',
      alt: 'Аймерек апайдың 2026 жылғы салтанатты кештегі көгілдір көйлекпен түскен суреті',
      caption: 'Prom 2026 · ерекше кеш',
      category: 'Естеліктер',
      width: 470,
      height: 588,
    },
    {
      src: 'images/optimized/personal-prom-blue-23-curated.webp',
      fullSrc: 'images/optimized/personal-prom-blue-23.webp',
      alt: 'Аймерек апайдың 2026 жылғы кештегі салтанатты портреті',
      caption: 'Көгілдір кештің естелігі',
      category: 'Естеліктер',
      width: 470,
      height: 588,
    },
    {
      src: 'images/optimized/personal-prom-blue-20-curated.webp',
      fullSrc: 'images/optimized/personal-prom-blue-20.webp',
      alt: 'Аймерек апайдың prom 2026 кешіндегі мерекелік суреті',
      caption: 'Арманға толы кеш · 2026',
      category: 'Естеліктер',
      width: 470,
      height: 588,
    },
    {
      src: 'images/optimized/personal-prom-blue-22-curated.webp',
      fullSrc: 'images/optimized/personal-prom-blue-22.webp',
      alt: 'Аймерек апайдың гүлдер жанында түскен мерекелік портреті',
      caption: 'Жарқын сәт · Prom 2026',
      category: 'Естеліктер',
      width: 470,
      height: 588,
    },
    {
      src: 'images/optimized/personal-fire-night-16-curated.webp',
      fullSrc: 'images/optimized/personal-fire-night-16.webp',
      alt: 'Аймерек апайдың кешкі от жарығындағы портреті',
      caption: 'Оттай жарқын бір кеш',
      category: 'Естеліктер',
      width: 470,
      height: 588,
    },
    {
      src: 'images/optimized/personal-new-city-sphere-18-curated.webp',
      fullSrc: 'images/optimized/personal-new-city-sphere-18.webp',
      alt: 'Аймерек апайдың жаңа қаладағы кешкі портреті',
      caption: 'Жаңа қала · жаңа өмір',
      category: 'Естеліктер',
      width: 470,
      height: 588,
    },
    {
      src: 'images/optimized/personal-new-city-night-17-curated.webp',
      fullSrc: 'images/optimized/personal-new-city-night-17.webp',
      alt: 'Аймерек апайдың қала көшесіндегі кешкі суреті',
      caption: 'Қала шамдарындағы сәт',
      category: 'Естеліктер',
      width: 470,
      height: 588,
    },
    {
      src: 'images/optimized/personal-night-portrait-19-curated.webp',
      fullSrc: 'images/optimized/personal-night-portrait-19.webp',
      alt: 'Аймерек апайдың түнгі жарық астындағы портреті',
      caption: 'Түнгі тыныштық',
      category: 'Естеліктер',
      width: 470,
      height: 588,
    },
    {
      src: 'images/optimized/infologia/infologia-certificate-story-01.webp',
      alt: 'Аймерек апайдың Infologia сертификаттары көрсетілген естелік скриншот',
      caption: 'Infologia-дағы нәтижелер',
      category: 'Infologia',
      width: 591,
      height: 1280,
    },
    {
      src: 'images/optimized/infologia/infologia-study-desk-02.webp',
      alt: 'Infologia дәптері тұрған оқу бұрышы',
      caption: 'Күнделікті еңбектің көрінісі',
      category: 'Оқу',
      width: 591,
      height: 1280,
    },
    {
      src: 'images/optimized/infologia/infologia-presenior-03.webp',
      alt: 'Қасыбек Аймеректің Infologia preSENIOR тобына қабылданғаны туралы құттықтау',
      caption: 'preSENIOR кезеңі',
      category: 'Infologia',
      width: 591,
      height: 1280,
    },
    {
      src: 'images/optimized/infologia/infologia-group-list-04.webp',
      alt: 'Infologia оқу тобының тізімінде Қасыбек Аймерек есімі белгіленген скриншот',
      caption: 'Infologia тобындағы оқу',
      category: 'Infologia',
      width: 591,
      height: 1280,
    },
    {
      src: 'images/optimized/infologia/infologia-senior-collage-05.webp',
      alt: 'Қасыбек Аймеректің Infologia SENIOR тобына қабылдану кезеңінен коллаж',
      caption: 'SENIOR кезеңіне қадам',
      category: 'Infologia',
      width: 591,
      height: 1280,
    },
    {
      src: 'images/optimized/infologia/infologia-fortis-memory-06.webp',
      alt: 'Аймерек апайдың ҰБТ жолындағы FORTIS тобымен бірге түскен естелік коллажы',
      caption: 'ҰБТ жолындағы FORTIS естелігі',
      category: 'Естеліктер',
      width: 591,
      height: 1280,
    },
    {
      src: 'images/optimized/infologia/infologia-graduation-evening-07.webp',
      alt: 'Infologia түлектер кешінен жасалған естелік коллаж',
      caption: 'Infologia түлектер кеші · 24.08.2026',
      category: 'Infologia',
      width: 591,
      height: 1280,
    },
    {
      src: 'images/optimized/infologia/infologia-nexus-group-08.webp',
      alt: 'Infologia INFO-32 NEXUS тобының ортақ коллажы',
      caption: 'INFO-32 NEXUS · 31.08.2026',
      category: 'Кураторлық',
      width: 591,
      height: 1280,
    },
    {
      src: 'images/optimized/infologia/unt-result-98-09.webp',
      alt: 'Қасыбек Аймеректің 2026 жылғы ҰБТ-дан 98 балл алғанын көрсететін нәтиже парағы',
      caption: 'ҰБТ нәтижесі · 98 балл',
      category: 'Оқу',
      width: 591,
      height: 1280,
    },
    {
      src: 'images/optimized/infologia/unt-result-list-98-10.webp',
      alt: 'Қасыбек Аймеректің 98 балл нәтижесі белгіленген тізім',
      caption: '98 баллдың расталған тізімі',
      category: 'Оқу',
      width: 591,
      height: 1280,
    },
    {
      src: 'images/optimized/personal-graduation-portrait-11-curated.webp',
      fullSrc: 'images/optimized/personal-graduation-portrait-11.webp',
      alt: 'Аймерек апайдың түлектер кешіндегі салтанатты портреті',
      caption: 'Түлектер кешінен естелік · 24.08.2026',
      category: 'Естеліктер',
      width: 591,
      height: 739,
    },
    {
      src: 'images/optimized/personal-friendship-night-12-curated.webp',
      fullSrc: 'images/optimized/personal-friendship-night-12.webp',
      alt: 'Шолу дөңгелегі жанындағы достық фотосуреттері',
      caption: 'Жарқын кештен қалған естелік',
      category: 'Естеліктер',
      width: 591,
      height: 739,
    },
    {
      src: 'images/optimized/personal-photobooth-friend-13-curated.webp',
      fullSrc: 'images/optimized/personal-photobooth-friend-13.webp',
      alt: 'Аймерек апай мен құрбысының фотобудкадағы суреттері',
      caption: 'Достықтың жылы сәттері',
      category: 'Естеліктер',
      width: 591,
      height: 739,
    },
    {
      src: 'images/optimized/personal-outdoor-portrait-14-curated.webp',
      fullSrc: 'images/optimized/personal-outdoor-portrait-14.webp',
      alt: 'Аймерек апайдың тау бөктеріндегі портреті',
      caption: 'Жол үстіндегі бір сәт',
      category: 'Естеліктер',
      width: 591,
      height: 739,
    },
    {
      src: 'images/optimized/personal-graduation-selfies-15-curated.webp',
      fullSrc: 'images/optimized/personal-graduation-selfies-15.webp',
      alt: 'Аймерек апайдың салтанатты күндегі селфи суреттері',
      caption: 'Жетістікке толы күннің кадрлары',
      category: 'Естеліктер',
      width: 591,
      height: 739,
    },
  ],
  quotes: [],
  interests: [],
  favoriteArtists: [],
  favoriteSongs: [],
  volleyball:
    'Аймерек апай білімге деген құштарлығымен ғана емес, спортқа деген қызығушылығымен де ерекшеленеді. Волейбол — оның белсенді өмірінің бір бөлігі.',
  musicPreferencesConfirmed: false,
}

export const storySteps = [
  'Алғашқы қадам',
  'Infologia-дағы оқу кезеңі',
  'ҰБТ-ға дайындық',
  'Еңбек пен ізденіс',
  'Жетістіктерге жол',
  'Кураторлық жолы',
] as const
