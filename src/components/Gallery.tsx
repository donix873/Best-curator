import { ChevronLeft, ChevronRight, Image, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { GalleryCategory, GalleryItem } from '../data/aimerek'
import { assetUrl } from '../utils/assets'

const categories: Array<'Барлығы' | GalleryCategory> = ['Барлығы', 'Оқу', 'Infologia', 'Кураторлық', 'Естеліктер']

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]>('Барлығы')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const touchStart = useRef<number | null>(null)
  const filtered = useMemo(() => (category === 'Барлығы' ? items : items.filter((item) => item.category === category)), [category, items])

  const move = (direction: number) => {
    setActiveIndex((current) => (current === null ? null : (current + direction + filtered.length) % filtered.length))
  }

  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (activeIndex === null) return
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') move(-1)
      if (event.key === 'ArrowRight') move(1)
    }
    window.addEventListener('keydown', keydown)
    return () => window.removeEventListener('keydown', keydown)
  })

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Галерея санаттары">
        {categories.map((item) => (
          <button className={item === category ? 'active' : ''} key={item} onClick={() => setCategory(item)}>
            {item}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <div className="gallery-grid">
          {filtered.map((item, index) => (
            <motion.button
              className={`polaroid${item.fit === 'contain' ? ' polaroid--contain' : ''}`}
              key={`${item.src}-${index}`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ y: -8, rotate: index % 2 ? 1 : -1 }}
            >
              <img src={assetUrl(item.src)} alt={item.alt} loading="lazy" width={item.width} height={item.height} />
              <span>{item.caption ?? 'Естелік'}</span>
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="gallery-empty">
          <div className="gallery-empty__frames" aria-hidden="true">
            <span /><span /><span />
          </div>
          <Image size={28} aria-hidden="true" />
          <strong>Естеліктерге арналған орын</strong>
          <p>Аймерек апайдың шынайы фотосуреттері қосылғанда, олар осы жерде әдемі хикаяға айналады.</p>
        </div>
      )}
      <AnimatePresence>
        {activeIndex !== null && filtered[activeIndex] && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Фотосуретті толық көру"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onTouchStart={(event) => { touchStart.current = event.touches[0].clientX }}
            onTouchEnd={(event) => {
              if (touchStart.current === null) return
              const difference = event.changedTouches[0].clientX - touchStart.current
              if (Math.abs(difference) > 45) move(difference > 0 ? -1 : 1)
              touchStart.current = null
            }}
          >
            <button className="lightbox__close" onClick={() => setActiveIndex(null)} aria-label="Жабу"><X /></button>
            <button className="lightbox__previous" onClick={() => move(-1)} aria-label="Алдыңғы сурет"><ChevronLeft /></button>
            <motion.figure key={filtered[activeIndex].src} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
              <img src={assetUrl(filtered[activeIndex].fullSrc ?? filtered[activeIndex].src)} alt={filtered[activeIndex].alt} />
              {filtered[activeIndex].caption && <figcaption>{filtered[activeIndex].caption}</figcaption>}
            </motion.figure>
            <button className="lightbox__next" onClick={() => move(1)} aria-label="Келесі сурет"><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
