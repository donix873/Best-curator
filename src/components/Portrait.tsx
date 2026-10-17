import { motion, useReducedMotion } from 'motion/react'

interface PortraitProps {
  src: string | null
  alt: string
  variant?: 'hero' | 'finale'
}

export function Portrait({ src, alt, variant = 'hero' }: PortraitProps) {
  const reduceMotion = useReducedMotion()

  return (
    <div className={`portrait portrait--${variant}`}>
      <div className="portrait__halo" aria-hidden="true" />
      {src ? (
        <motion.img
          className="portrait__image"
          src={src}
          alt={alt}
          loading={variant === 'hero' ? 'eager' : 'lazy'}
          initial={{ scale: 1 }}
          animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      ) : (
        <div className="portrait__placeholder" role="img" aria-label="Фотосуретке арналған абстрактілі орын">
          <span className="portrait__moon" />
          <span className="portrait__arc" />
          <span className="portrait__monogram">A</span>
          <span className="portrait__hint">ФОТОСУРЕТ ОРНЫ</span>
        </div>
      )}
      <div className="portrait__grain" aria-hidden="true" />
    </div>
  )
}
