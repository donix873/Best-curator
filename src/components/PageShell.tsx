import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AmbientBackground } from './AmbientBackground'
import { MusicPlayer } from './MusicPlayer'
import { Navbar } from './Navbar'
import { ScrollTools } from './ScrollTools'

export function PageShell() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' }), 80)
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location.pathname, location.hash])

  return (
    <div className="site-shell">
      <AmbientBackground />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <MusicPlayer />
      <ScrollTools />
      <footer className="footer">
        <span>AIMEREK — THE YOUTIFUL STORY</span>
        <span>Шын жүректен, шәкірттеріңізден ♡</span>
      </footer>
    </div>
  )
}
