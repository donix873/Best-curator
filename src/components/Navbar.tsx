import { Menu, Sparkles, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Басты бет', to: '/' },
  { label: 'Аймерек апайдың жолы', to: '/#story' },
  { label: 'Жетістіктері', to: '/achievements' },
  { label: 'Естеліктер', to: '/#gallery' },
  { label: 'Аймерек апайдың әлемі', to: '/her-world' },
  { label: 'Алғыс', to: '/#gratitude' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="nav-shell">
      <Link className="brand" to="/" aria-label="AIMEREK басты беті">
        <Sparkles size={16} aria-hidden="true" />
        <span>AIMEREK</span>
      </Link>
      <nav className="nav-desktop" aria-label="Негізгі навигация">
        {links.map((link) => (
          <Link className={location.pathname === link.to ? 'active' : ''} key={link.label} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>
      <button className="nav-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Мәзірді ашу">
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav-mobile"
            aria-label="Мобильді навигация"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {links.map((link, index) => (
              <motion.div key={link.label} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                <Link to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
