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
  heroImage: null,
  biography: null,
  untScore: null,
  untYear: null,
  infologiaStory:
    'Ұсынылған материалдар Аймерек апайдың Infologia-дағы оқу жолында preSENIOR және SENIOR топтарына қабылданғанын растайды.',
  curatorStory: null,
  achievements: [
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
