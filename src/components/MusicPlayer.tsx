import { Music2, Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { useMusic } from './MusicProvider'

export function MusicPlayer() {
  const { trackInfo, isPlaying, muted, volume, unavailable, toggle, setMuted, setVolume } = useMusic()

  return (
    <aside className="music-player" aria-label="Музыка ойнатқышы">
      <button className="music-player__play" onClick={toggle} aria-label={isPlaying ? 'Музыканы тоқтату' : 'Музыканы қосу'}>
        {isPlaying ? <Pause size={17} /> : <Play size={17} />}
      </button>
      <Music2 size={16} className="music-player__note" aria-hidden="true" />
      <div className="music-player__info">
        <strong>{trackInfo.title}</strong>
        <span>{unavailable ? 'Аудиофайл кейін қосылады' : trackInfo.artist}</span>
      </div>
      <button className="music-player__mute" onClick={() => setMuted(!muted)} aria-label={muted ? 'Дыбысты қосу' : 'Дыбысты өшіру'}>
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
      <input
        className="music-player__volume"
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={volume}
        onChange={(event) => setVolume(Number(event.target.value))}
        aria-label="Дыбыс деңгейі"
      />
    </aside>
  )
}
