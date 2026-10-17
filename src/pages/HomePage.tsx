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
  'Сіз бізге тек білім жолын көрсеткен жоқсыз…',
  'Сіз бізге өзімізге сенуді үйреттіңіз.',
  'Сіздің әр сөзіңіз бізге жігер береді.',
  'Қиын сәттерде қолдағаныңызды ұмытпаймыз.',
  'Біздің кішкентай жеңістерімізге бірге қуандыңыз.',
  'Әрқайсымызға сеніммен қарадыңыз.',
  'Әр қолдауыңыз біз үшін қымбат.',
  'Жылы сөзіңіз жүрегімізде ұзақ сақталады.',
  'Біз сізді шын жүректен бағалаймыз.',
  'Рақмет сізге, Аймерек апай!',
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
          <Reveal delay={0.2}><p>Әр кезеңнің өз үні, өз жарығы бар. Нақты оқиғалар мен күндер материалдардан кейін осы хикаяны толықтырады.</p></Reveal>
        </div>
        <div className="timeline">
          {storySteps.map((step, index) => (
            <Reveal className="timeline__item" direction={index % 2 ? 'right' : 'left'} key={step}>
              <span className="timeline__number">0{index + 1}</span>
              <div className="timeline__dot" />
              <article>
                <span>ЕСТЕЛІК БӨЛІМІ</span>
                <h3>{step}</h3>
                <p>Бұл кезең туралы расталған мәтін мен фотосурет кейін қосылады.</p>
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
          <strong>—</strong>
          <span>РАСТАЛҒАН НӘТИЖЕГЕ АРНАЛҒАН ОРЫН</span>
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
        <Reveal><p className="eyebrow">БІЗДІҢ АЛҒЫСЫМЫЗ</p></Reveal>
        <Reveal delay={0.1}><h2 className="gratitude__title">Жүректен шыққан <em>сөздер</em></h2></Reveal>
        <Reveal delay={0.2}><p className="gratitude__intro">Әр сөйлем — сізге айтқымыз келген алғысымыздың бір бөлігі.</p></Reveal>
        <div className="gratitude__notes">
          <motion.svg
            className="gratitude__thread"
            viewBox="0 0 920 1420"
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
              d="M170 70 C190 150 740 105 745 225 S205 290 205 390 S730 450 715 560 S190 625 205 735 S755 800 720 910 S185 985 215 1085 S725 1150 700 1250 S430 1325 460 1390"
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
          {gratitude.map((line, index) => (
            <Reveal className={`note note--${index + 1}`} delay={index * 0.08} key={line}>
              <span className="note__number">{String(index + 1).padStart(2, '0')}</span>
              {index === gratitude.length - 1 && <Heart size={19} fill="currentColor" aria-hidden="true" />}
              <p>{line}</p>
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
