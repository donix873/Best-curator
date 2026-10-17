import { motion, useReducedMotion } from 'motion/react'

export function Volleyball() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="volleyball-art" aria-hidden="true">
      <span className="volleyball-art__trail volleyball-art__trail--one" />
      <span className="volleyball-art__trail volleyball-art__trail--two" />
      <motion.svg
        viewBox="0 0 200 200"
        className="volleyball-art__ball"
        animate={reduceMotion ? undefined : { y: [0, -24, 0], rotate: [0, 16, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <circle cx="100" cy="100" r="76" fill="none" stroke="currentColor" strokeWidth="5" />
        <path d="M100 24c18 18 25 43 20 67-18-16-43-24-67-19" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M45 48c-3 25 6 49 25 66-8 15-11 33-8 50" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M176 100c-22 5-42 18-54 38-19-5-39-3-57 5" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </motion.svg>
    </div>
  )
}
