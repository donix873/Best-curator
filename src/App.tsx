import { Route, Routes } from 'react-router-dom'
import { MusicProvider } from './components/MusicProvider'
import { PageShell } from './components/PageShell'
import { AchievementsPage } from './pages/AchievementsPage'
import { HerWorldPage } from './pages/HerWorldPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <MusicProvider>
      <Routes>
        <Route element={<PageShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/her-world" element={<HerWorldPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </MusicProvider>
  )
}

export default App
