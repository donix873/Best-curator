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
  infologiaStory: null,
  curatorStory: null,
  achievements: [],
  gallery: [],
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
