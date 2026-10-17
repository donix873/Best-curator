import { Music, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { Volleyball } from '../components/Volleyball'
import { aimerek } from '../data/aimerek'
import { assetUrl } from '../utils/assets'

export function HerWorldPage() {
  return (
    <div className="inner-page world-page">
      <header className="page-hero page-hero--world">
        <Reveal><p className="eyebrow">МУЗЫКА · ШАБЫТ · ҚОЗҒАЛЫС</p></Reveal>
        <Reveal delay={0.1}><h1>АЙМЕРЕК АПАЙДЫҢ <em>ӘЛЕМІ</em></h1></Reveal>
        <Reveal delay={0.2}><p>Әр адамның өзіне ғана тән ерекше әлемі бар…</p></Reveal>
      </header>

      <section className="music-world">
        <Reveal className="music-world__photo" direction="left">
          <img
            src={assetUrl('images/optimized/music/stray-kids-group.webp') ?? undefined}
            alt="Stray Kids тобының топтық фотосуреті"
          />
          <div className="music-world__photo-shade" aria-hidden="true" />
          <div className="music-world__photo-copy">
            <span>STRAY KIDS</span>
            <strong>YOUTIFUL</strong>
            <small>YOU ARE A MIRACLE</small>
          </div>
          <span className="music-world__photo-note" aria-hidden="true"><Music /></span>
        </Reveal>
        <Reveal className="music-world__copy" direction="right">
          <p className="eyebrow">K-POP · STRAY KIDS · YOUTIFUL</p>
          <h2>Сезімге толы <em>әуен</em></h2>
          <p>«Музыка — кейде сөзбен жеткізе алмайтын сезімді жеткізетін ерекше әлем.»</p>
          <div className="music-tags" aria-label="Тақырыптар">
            <span>Youtiful</span><span>Stray Kids</span><span>K-pop</span>
          </div>
        </Reveal>
      </section>

      <section className="volleyball-section">
        <Reveal className="volleyball-section__copy" direction="left">
          <p className="eyebrow">ҚОЗҒАЛЫС ПЕН ҚУАТ</p>
          <h2>БІЛІМДЕ ДЕ, СПОРТТА ДА <em>БЕЛСЕНДІ</em> 🏐</h2>
          <h3>Жетістік тек біліммен шектелмейді.</h3>
          <p>{aimerek.volleyball}</p>
        </Reveal>
        <Reveal className="volleyball-section__art" direction="right"><Volleyball /></Reveal>
      </section>

      <Reveal className="world-cta">
        <Star size={20} fill="currentColor" />
        <p>Адамның әлемін ерекше ететін — оның шынайылығы.</p>
        <Link className="button button--outline" to="/#gratitude">Алғысымызға өту →</Link>
      </Reveal>
    </div>
  )
}
