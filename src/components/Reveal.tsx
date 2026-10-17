import { motion, useReducedMotion } from 'motion/react'
import type { PropsWithChildren } from 'react'

interface RevealProps extends PropsWithChildren {
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function Reveal({ children, className, delay = 0, direction = 'up' }: RevealProps) {
  const reduceMotion = useReducedMotion()
  const offsets = {
    up: { x: 0, y: 32 },
    left: { x: -32, y: 0 },
    right: { x: 32, y: 0 },
    none: { x: 0, y: 0 },
  }
  const offset = offsets[direction]

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.85, delay, ease: [0.2, 0.65, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
