import { Award, BookOpen, FileBadge, GraduationCap } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { aimerek } from '../data/aimerek'
import { assetUrl } from '../utils/assets'

const sections = [
  { title: 'ҰБТ нәтижесі', icon: GraduationCap, text: '25.06.2026 · 98 / 140 балл' },
  { title: 'Infologia-дағы жетістіктері', icon: BookOpen, text: 'preSENIOR және SENIOR топтарына қабылданды.' },
  { title: 'Сертификаттары', icon: FileBadge, text: 'Оқу жолындағы сертификаттары мен марапаттары.' },
  { title: 'Кураторлық жолы', icon: Award, text: 'INFO-32 тобының кураторы.' },
]

const untSubjects = [
  { label: 'Қазақстан тарихы', short: 'Тарих', score: 17, max: 20 },
  { label: 'Оқу сауаттылығы', short: 'Оқу сауат.', score: 10, max: 10 },
  { label: 'Математикалық сауаттылық', short: 'Мат. сауат.', score: 6, max: 10 },
  { label: 'Математика', short: 'Математика', score: 25, max: 50 },
  { label: 'Информатика', short: 'Информатика', score: 40, max: 50 },
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
          <button
            className="achievement-proof__result"
            type="button"
            onClick={() => window.open(assetUrl('images/optimized/unt-result-clean-98-31.webp') ?? undefined, '_blank', 'noopener,noreferrer')}
            aria-label="ҰБТ нәтижесінің дәлелін толық ашу"
          >
            <img
              src={assetUrl('images/optimized/unt-result-clean-98-31.webp') ?? undefined}
              alt="Қасыбек Аймеректің 98 балл алғанын көрсететін ҰБТ нәтижесі"
            />
          </button>
          <p><strong>25.06.2026</strong> · Нәтиже жеке қорытынды парақпен және ресми тізімдегі жазбамен расталды.</p>
        </Reveal>
      </section>

      <section className="unt-breakdown" aria-labelledby="unt-breakdown-title">
        <Reveal className="unt-breakdown__heading">
          <p className="eyebrow">ҰБТ · ПӘНДЕР БОЙЫНША</p>
          <h2 id="unt-breakdown-title">98 баллдың <em>құрамы</em></h2>
          <p>Жеке нәтиже парағында көрсетілген пәндік балдар.</p>
        </Reveal>
        <div className="unt-breakdown__grid">
          {untSubjects.map((subject, index) => (
            <Reveal className="unt-subject" delay={index * 0.06} key={subject.label}>
              <div className="unt-subject__top">
                <span>{subject.short}</span>
                <strong>{subject.score}<small> / {subject.max}</small></strong>
              </div>
              <p>{subject.label}</p>
              <div className="unt-subject__track" aria-hidden="true">
                <span style={{ width: `${(subject.score / subject.max) * 100}%` }} />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="unt-breakdown__total">
          <span>ЖАЛПЫ НӘТИЖЕ</span>
          <strong>17 + 10 + 6 + 25 + 40 = <em>98</em></strong>
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
        {sections.map(({ title, icon: Icon, text }, index) => (
          <Reveal className="achievement-card" delay={index * 0.08} key={title}>
            <Icon size={24} aria-hidden="true" />
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </Reveal>
        ))}
      </section>

      <Reveal className="achievement-quote">
        <p>«Бүгінгі жетістіктің артында кешегі тынымсыз еңбек жатыр.»</p>
      </Reveal>
    </div>
  )
}
