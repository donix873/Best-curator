import { Award, BookOpen, FileBadge, GraduationCap } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { aimerek } from '../data/aimerek'
import { assetUrl } from '../utils/assets'

const sections = [
  { title: 'ҰБТ нәтижесі', icon: GraduationCap },
  { title: 'Infologia-дағы жетістіктері', icon: BookOpen },
  { title: 'Сертификаттары', icon: FileBadge },
  { title: 'Басқа жетістіктері', icon: Award },
]

export function AchievementsPage() {
  return (
    <div className="inner-page achievements-page">
      <header className="page-hero">
        <Reveal><p className="eyebrow">ЕҢБЕК · ТАБАНДЫЛЫҚ · НӘТИЖЕ</p></Reveal>
        <Reveal delay={0.1}><h1>АЙМЕРЕК АПАЙДЫҢ <em>ЖЕТІСТІКТЕРІ</em></h1></Reveal>
        <Reveal delay={0.2}><p>Әр жетістіктің артында үлкен еңбек жатыр.</p></Reveal>
      </header>

      <section className="achievement-feature">
        <Reveal className="achievement-score">
          <span>ҰБТ НӘТИЖЕСІ</span>
          <strong>{aimerek.untScore ?? '—'}</strong>
          <small>{aimerek.untYear ? `${aimerek.untYear} жыл` : 'Расталған нәтиже әлі қосылмады'}</small>
        </Reveal>
        <Reveal className="achievement-proof" direction="right">
          <div className="achievement-proof__seal"><GraduationCap /></div>
          <p>Нәтиже скриншоты келгенде, балл мен жыл осы жерде түпнұсқа дәлелімен бірге көрсетіледі.</p>
        </Reveal>
      </section>

      {aimerek.achievements.length > 0 && (
        <section className="verified-achievements" aria-labelledby="verified-achievements-title">
          <Reveal className="verified-achievements__heading">
            <p className="eyebrow">МАТЕРИАЛДАРМЕН РАСТАЛДЫ</p>
            <h2 id="verified-achievements-title">Infologia-дағы <em>жетістіктері</em></h2>
          </Reveal>
          <div className="verified-achievements__grid">
            {aimerek.achievements.map((achievement, index) => (
              <Reveal className="verified-achievement" delay={index * 0.08} key={achievement.title}>
                {achievement.image && (
                  <button
                    className="verified-achievement__image"
                    type="button"
                    onClick={() => window.open(assetUrl(achievement.image) ?? undefined, '_blank', 'noopener,noreferrer')}
                    aria-label={`${achievement.title}: дәлел суретін толық ашу`}
                  >
                    <img src={assetUrl(achievement.image) ?? undefined} alt={`${achievement.title} туралы материал`} loading="lazy" />
                  </button>
                )}
                <div className="verified-achievement__copy">
                  <span>{String(index + 1).padStart(2, '0')} · РАСТАЛҒАН</span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="achievement-grid">
        {sections.map(({ title, icon: Icon }, index) => (
          <Reveal className="achievement-card" delay={index * 0.08} key={title}>
            <Icon size={24} aria-hidden="true" />
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>Бұл бөлім расталған материалдармен толтырылады.</p>
          </Reveal>
        ))}
      </section>

      <Reveal className="achievement-quote">
        <p>«Бүгінгі жетістіктің артында кешегі тынымсыз еңбек жатыр.»</p>
      </Reveal>
    </div>
  )
}
