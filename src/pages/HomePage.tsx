import { ArrowDown, Heart, Quote, RotateCcw, Sparkles } from 'lucide-react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Gallery } from '../components/Gallery'
import { Intro } from '../components/Intro'
import { useMusic } from '../components/MusicProvider'
import { Portrait } from '../components/Portrait'
import { Reveal } from '../components/Reveal'
import { aimerek, storySteps } from '../data/aimerek'
import { assetUrl } from '../utils/assets'

const gratitude = [
  { theme: 'ҚОЛДАУ', text: 'Сіз бізге тек білім жолын көрсеткен жоқсыз — әр қадамымызда жанымыздан табылдыңыз.' },
  { theme: 'СЕНІМ', text: 'Сіз бізге өзімізге сенуді үйреттіңіз.' },
  { theme: 'ШАБЫТ', text: 'Әр кеңесіңіз бізге алға қарай тағы бір қадам жасауға күш береді.' },
  { theme: 'ҚОЛДАУ', text: 'Қиын сәттерде қолдағаныңызды ешқашан ұмытпаймыз.' },
  { theme: 'МЕЙІРІМ', text: 'Біз үнсіз қалғанда да көңіл күйімізді түсіне білдіңіз.' },
  { theme: 'ЕҢБЕК', text: 'Әр сұрағымызға уақыт бөліп, түсінікті жауап бергеніңіз үшін рақмет.' },
  { theme: 'СЕНІМ', text: 'Қателесуден қорықпай, қайта байқап көруге үйреттіңіз.' },
  { theme: 'ЕСТЕЛІК', text: 'Біздің кішкентай жеңістерімізге бірге қуандыңыз.' },
  { theme: 'МЕЙІРІМ', text: 'Әрқайсымызға жеке тұлға ретінде құрметпен қарадыңыз.' },
  { theme: 'СЕНІМ', text: 'Сіздің «қолыңнан келеді» деген сөзіңіз кейде бізге ең керекті жауап болды.' },
  { theme: 'МЕЙІРІМ', text: 'Бір ауыз жылы сөзіңіз бүкіл күнімізді жақсы жаққа өзгерте алады.' },
  { theme: 'ЕҢБЕК', text: 'Бізге бөлген әр минутыңыздың артында үлкен еңбек бар екенін білеміз.' },
  { theme: 'ҚОЛДАУ', text: 'Сабырлығыңыз бен түсіністігіңіз біз үшін өте қымбат.' },
  { theme: 'ШАБЫТ', text: 'Әр сабақты мақсатқа жақындататын мүмкіндікке айналдырдыңыз.' },
  { theme: 'ЕҢБЕК', text: 'Жауапкершілікті сөзбен емес, өз үлгіңізбен көрсеттіңіз.' },
  { theme: 'СЕНІМ', text: 'Арманымызды кішкентай деп санамай, оған байыппен қарадыңыз.' },
  { theme: 'ҚОЛДАУ', text: 'Сіз бізге сенім артқанда, біз де өзімізге көбірек сене бастадық.' },
  { theme: 'МЕЙІРІМ', text: 'Еңбегімізді байқап, жақсы сөзбен бағалай білгеніңіз үшін рақмет.' },
  { theme: 'ҚОЛДАУ', text: 'Көңіл күйімізді сұрауды ешқашан ұмытпадыңыз.' },
  { theme: 'СЕНІМ', text: 'Сіздің қолдауыңыз бізге «мен жалғыз емеспін» деген сезім сыйлады.' },
  { theme: 'ЕҢБЕК', text: 'Тынымсыз еңбегіңіз бізге табандылықтың шынайы мағынасын көрсетті.' },
  { theme: 'ШАБЫТ', text: 'Білімге деген адалдығыңыз бізге әрдайым үлгі.' },
  { theme: 'ЕҢБЕК', text: 'Жұмысты соңына дейін жеткізуге өз ісіңізбен үйреттіңіз.' },
  { theme: 'СЕНІМ', text: 'Қиындыққа берілмей, одан сабақ алуды көрсеттіңіз.' },
  { theme: 'ЕҢБЕК', text: 'Уақытты бағалап, әр күнді пайдалы өткізуге бағыт бердіңіз.' },
  { theme: 'ШАБЫТ', text: 'Әр нәтиженің артында күн сайынғы кішкентай қадамдар бар екенін түсіндірдіңіз.' },
  { theme: 'ЕҢБЕК', text: 'Талап қоя отырып, әрқашан адамгершілік пен жылылықты сақтадыңыз.' },
  { theme: 'ҚОЛДАУ', text: 'Біз үшін алаңдап, дұрыс бағыт көрсетуге тырысқаныңызды бағалаймыз.' },
  { theme: 'ШАБЫТ', text: 'Өз ісіңізге деген сүйіспеншілігіңіз бізді де шабыттандырады.' },
  { theme: 'ЕҢБЕК', text: 'Көзге көрінбейтін қаншама жұмысыңыз үшін ерекше алғыс айтамыз.' },
  { theme: 'ШАБЫТ', text: 'Әр күнімізге мақсат пен мағына қосқаныңыз үшін рақмет.' },
  { theme: 'ШАБЫТ', text: 'Сіздің жігеріңіз бізге шаршаған сәтте де тоқтамауға көмектеседі.' },
  { theme: 'СЕНІМ', text: 'Мақсатқа жету үшін алдымен өзіңе сену керегін үйреттіңіз.' },
  { theme: 'ШАБЫТ', text: 'Әр мүмкіндікті жаңа бастама ретінде көруге көмектестіңіз.' },
  { theme: 'МЕЙІРІМ', text: 'Күлімсіреуіңіз бен жылы амандасуыңыздың өзі бізге қуат береді.' },
  { theme: 'ЕСТЕЛІК', text: 'Сіз айтқан маңызды сөздер бізбен бірге ұзақ сақталады.' },
  { theme: 'ЕСТЕЛІК', text: 'Бірге өткен әр күн — қайтып оралғымыз келетін жылы естелік.' },
  { theme: 'ЕСТЕЛІК', text: 'Қарапайым күндерді де ерекше ете білдіңіз.' },
  { theme: 'ЕСТЕЛІК', text: 'Ортақ күлкі мен кішкентай сәттердің бәрі біз үшін бағалы.' },
  { theme: 'МЕЙІРІМ', text: 'Сабақтан тыс уақытта да адам ретінде қолдау көрсеттіңіз.' },
  { theme: 'МЕЙІРІМ', text: 'Бізді тыңдай білуіңіз — бізге жасаған үлкен сыйыңыздың бірі.' },
  { theme: 'ҚОЛДАУ', text: 'Әр жетістігімізде сіздің де еңбегіңіз бар.' },
  { theme: 'СЕНІМ', text: 'Біз өзімізге күмәнданғанда, сіз бізге сендіңіз.' },
  { theme: 'ЕСТЕЛІК', text: 'Сізбен байланысты естеліктер әрқашан жүрегімізде жылы орын алады.' },
  { theme: 'ШАБЫТ', text: 'Алда қай жолмен жүрсек те, сіз берген жігер бізбен бірге болады.' },
  { theme: 'ЕСТЕЛІК', text: 'Сіздің шәкіртіңіз болу — біз мақтанышпен айтатын естелік.' },
  { theme: 'ЕҢБЕК', text: 'Біздің болашағымызға қосқан еңбегіңізді сөзбен толық жеткізу мүмкін емес.' },
  { theme: 'СЕНІМ', text: 'Сізден үйренгеніміз тек сабақ емес — өзімізге және болашағымызға сену.' },
  { theme: 'МЕЙІРІМ', text: 'Сізді шын жүректен бағалаймыз және әр жақсылығыңызды есте сақтаймыз.' },
  { theme: 'АЛҒЫС', text: 'Рақмет сізге, Аймерек апай! Біз үшін жасаған барлық еңбегіңіз жүрегімізде қалады.' },
]

const storyMoments = [
  {
    text: '2026 жылғы салтанатты кештен қалған бұл кадр Аймерек апайдың өміріндегі жарқын кезеңдердің бірін сақтайды.',
    image: 'images/optimized/personal-prom-blue-21-curated.webp',
    caption: 'Prom · 2026',
  },
  {
    text: aimerek.infologiaStory,
    image: 'images/optimized/infologia/infologia-presenior-03-curated.webp',
    caption: 'Infologia · preSENIOR',
  },
  {
    text: '2026 жылғы 25 маусымдағы ҰБТ нәтижесі — 98 балл. Бұл нәтиже екі ұсынылған материалмен расталды.',
    image: 'images/optimized/unt-result-clean-98-31.webp',
    caption: 'ҰБТ · 98 балл',
  },
  {
    text: 'Ізденіске толы күндердің арасында есте қалатын тыныш әрі әдемі сәттер де бар.',
    image: 'images/optimized/personal-outdoor-portrait-14-curated.webp',
    caption: 'Жол үстіндегі бір сәт',
  },
  {
    text: 'Жетістікке жеткен күннің қуанышы осы жылы кадрларда сақталған.',
    image: 'images/optimized/personal-graduation-selfies-15-curated.webp',
    caption: 'Жетістікке толы күн',
  },
  {
    text: aimerek.curatorStory,
    image: 'images/optimized/curator-meet-presenting-30.webp',
    caption: 'INFO-32 · онлайн кураторлық кездесу',
  },
]

export function HomePage() {
  const [showIntro, setShowIntro] = useState(() => sessionStorage.getItem('aimerek-intro-seen') !== 'yes')
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 90])
  const { playTrack } = useMusic()

  const finishIntro = () => {
    sessionStorage.setItem('aimerek-intro-seen', 'yes')
    setShowIntro(false)
  }

  const replay = () => {
    playTrack('love-story')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.setTimeout(() => setShowIntro(true), 500)
  }

  return (
    <>
      <AnimatePresence>{showIntro && <Intro onDone={finishIntro} />}</AnimatePresence>

      <section className="hero" id="home">
        <motion.div className="hero__visual" style={{ y: heroY }}>
          <Portrait src={assetUrl(aimerek.heroImage)} alt="Аймерек апайдың портреті" />
        </motion.div>
        <div className="hero__copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, letterSpacing: '0.15em' }} animate={{ opacity: 1, letterSpacing: '0.32em' }} transition={{ duration: 1.2 }}>
            A STORY ABOUT SOMEONE SPECIAL
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            АЙМЕРЕК <em>АПАЙ</em>
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}>
            СІЗ — ЕҢ ҮЗДІК КУРАТОРСЫЗ!
          </motion.h2>
          <motion.p className="hero__quote" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}>
            «Кей адамдар өмірімізге жай ғана келмейді. Олар бізге өзімізге сенуді үйретеді.»
          </motion.p>
          <motion.a className="hero__scroll" href="#story" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
            Оқиғаны жалғастыру <ArrowDown size={16} />
          </motion.a>
        </div>
      </section>

      <section className="section story" id="story">
        <div className="section-heading">
          <Reveal><p className="eyebrow">АЙМЕРЕК АПАЙДЫҢ ЖОЛЫ · HER STORY</p></Reveal>
          <Reveal delay={0.1}><h2>Арманнан басталған <em>жол</em></h2></Reveal>
          <Reveal delay={0.2}><p>Әр кезеңнің өз үні, өз жарығы бар. Бұл хикая суреттермен және расталған нәтижелермен өріледі.</p></Reveal>
        </div>
        <div className="timeline">
          {storySteps.map((step, index) => (
            <Reveal className="timeline__item" direction={index % 2 ? 'right' : 'left'} key={step}>
              <span className="timeline__number">0{index + 1}</span>
              <div className="timeline__dot" />
              <article>
                <span>ЕСТЕЛІК БӨЛІМІ</span>
                <h3>{step}</h3>
                <p>{storyMoments[index].text}</p>
                <figure className="timeline__photo">
                  <img
                    src={assetUrl(storyMoments[index].image)}
                    alt={`${step}: Аймерек апайдың өмірінен фотосурет`}
                    loading="lazy"
                  />
                  <figcaption>{storyMoments[index].caption}</figcaption>
                </figure>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="story-quote">
          <Quote size={34} aria-hidden="true" />
          <p>«Бір кездері өзі де үлкен арманға қадам басқан шәкірт еді. Ал бүгін өзгелердің арманына жол көрсетіп жүр.»</p>
        </Reveal>
      </section>

      <section className="section preview-panel">
        <Reveal direction="left" className="preview-panel__copy">
          <p className="eyebrow">ЕҢБЕК ПЕН ЖЕТІСТІК</p>
          <h2>Әр қадамның артында <em>үлкен еңбек</em> жатыр</h2>
          <p>ҰБТ нәтижесі, сертификаттар және Infologia-дағы жетістіктер тек расталған материалдар негізінде көрсетіледі.</p>
          <Link className="button button--outline" to="/achievements">Жетістіктерді көру <span>→</span></Link>
        </Reveal>
        <Reveal direction="right" className="preview-panel__card">
          <span className="preview-panel__spark"><Sparkles /></span>
          <strong>{aimerek.untScore}</strong>
          <span>ҰБТ · 98 / 140 · 25.06.2026</span>
        </Reveal>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="section-heading section-heading--center">
          <Reveal><p className="eyebrow">ЕСТЕЛІКТЕР · MEMORIES</p></Reveal>
          <Reveal delay={0.1}><h2>Сақталатын <em>сәттер</em></h2></Reveal>
          <Reveal delay={0.2}><p>Кейбір сәттер сурет болып қалады. Кейбірі — жүректе.</p></Reveal>
        </div>
        <Gallery items={aimerek.gallery} />
      </section>

      <section className="section gratitude" id="gratitude">
        <div className="gratitude__glow" aria-hidden="true" />
        <Reveal><p className="eyebrow">АЛҒЫС ХАТТАР</p></Reveal>
        <Reveal delay={0.1}><h2 className="gratitude__title">Жүректен шыққан <em>елу хат</em></h2></Reveal>
        <Reveal delay={0.2}><p className="gratitude__intro">Елу хат. Елу жылы ой. Әрқайсысы — сізге айтқымыз келген алғысымыздың бір бөлігі.</p></Reveal>
        <div className="gratitude__notes">
          <motion.svg
            className="gratitude__thread"
            viewBox="0 0 1160 3400"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="gratitude-thread-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#C9A5E8" />
                <stop offset="0.5" stopColor="#F4B8D2" />
                <stop offset="1" stopColor="#C9A5E8" />
              </linearGradient>
            </defs>
            <motion.path
              d="M130 80 C210 180 1010 100 1020 300 S120 390 140 580 S1030 680 1010 850 S100 970 150 1160 S1040 1260 1000 1450 S110 1560 150 1740 S1040 1860 990 2040 S120 2160 160 2340 S1030 2440 990 2640 S110 2760 160 2940 S1010 3080 980 3260 S600 3340 580 3380"
              fill="none"
              stroke="url(#gratitude-thread-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="7 10"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 2.8, ease: 'easeInOut' }}
            />
          </motion.svg>
          {gratitude.map((letter, index) => (
            <Reveal className={`note note--${index + 1}`} delay={(index % 8) * 0.05} key={letter.text}>
              <span className="note__number">{String(index + 1).padStart(2, '0')}</span>
              <span className="note__theme">{letter.theme}</span>
              {index === gratitude.length - 1 && <Heart size={19} fill="currentColor" aria-hidden="true" />}
              <p>{letter.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="finale" id="finale">
        <div className="finale__sunset" aria-hidden="true" />
        <span className="butterfly butterfly--one" aria-hidden="true">◇</span>
        <span className="butterfly butterfly--two" aria-hidden="true">◇</span>
        <div className="finale__portrait"><Portrait src={assetUrl(aimerek.heroImage)} alt="Аймерек апайдың финалдық портреті" variant="finale" /></div>
        <Reveal className="finale__copy">
          <p className="eyebrow">THE YOUTIFUL FINALE</p>
          <h2>АЙМЕРЕК АПАЙ</h2>
          <h3>СІЗ — БІЗ ҮШІН ЕҢ ҮЗДІК КУРАТОРСЫЗ! ❤️</h3>
          <p>Сіздің ең үлкен жетістігіңіз — тек өз армандарыңызға жету емес, өзгелерге де өз арманына сенуге көмектесу.</p>
          <p>Бізге бөлген уақытыңыз, қолдауыңыз және еңбегіңіз үшін шын жүректен рақмет!</p>
          <span>Ізгі тілекпен, шәкірттеріңіз.</span>
          <div className="finale__actions">
            <button className="button button--primary" onClick={() => playTrack('youtiful')}>Сізге арналған ерекше ән ♡</button>
            <button className="button button--ghost" onClick={replay}><RotateCcw size={17} /> Қайта көру</button>
          </div>
        </Reveal>
      </section>
    </>
  )
}
