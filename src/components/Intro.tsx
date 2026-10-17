import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { ArrowRight, SkipForward } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useMusic } from './MusicProvider'

interface IntroProps {
  onDone: () => void
}

const lines = ['Бұл оқиға ерекше жанға арналған…', 'Біз үшін қымбат жанға…', 'АЙМЕРЕК АПАЙҒА ❤️']

export function Intro({ onDone }: IntroProps) {
  const reduceMotion = useReducedMotion()
  const [line, setLine] = useState(() => (reduceMotion ? lines.length - 1 : 0))
  const { toggle, isPlaying } = useMusic()

  useEffect(() => {
    if (reduceMotion) return
    const interval = window.setInterval(() => {
      setLine((current) => {
        if (current >= lines.length - 1) {
          window.clearInterval(interval)
          return current
        }
        return current + 1
      })
    }, 1500)
    return () => window.clearInterval(interval)
  }, [reduceMotion])

  const start = () => {
    if (!isPlaying) toggle()
    onDone()
  }

  return (
    <motion.div className="intro" exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
      <button className="intro__skip" onClick={onDone}>
        Өткізіп жіберу <SkipForward size={15} />
      </button>
      <div className="intro__glow" aria-hidden="true" />
      <AnimatePresence mode="wait">
        <motion.p
          className={line === lines.length - 1 ? 'intro__line intro__line--final' : 'intro__line'}
          key={line}
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(5px)' }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
        >
          {lines[line]}
        </motion.p>
      </AnimatePresence>
      <motion.button
        className="button button--primary intro__start"
        initial={{ opacity: 0 }}
        animate={{ opacity: line === lines.length - 1 ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={start}
        disabled={line !== lines.length - 1}
      >
        Оқиғаны бастау <ArrowRight size={18} />
      </motion.button>
    </motion.div>
  )
}
