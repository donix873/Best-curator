/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import type { PropsWithChildren } from 'react'

type TrackId = 'love-story' | 'youtiful'

const tracks: Record<TrackId, { title: string; artist: string; src: string }> = {
  'love-story': {
    title: 'Love Story',
    artist: 'Indila',
    src: `${import.meta.env.BASE_URL}audio/love-story-indila.mp3`,
  },
  youtiful: {
    title: 'Youtiful',
    artist: 'Stray Kids',
    src: `${import.meta.env.BASE_URL}audio/youtiful-stray-kids.mp3`,
  },
}

interface MusicContextValue {
  track: TrackId
  trackInfo: (typeof tracks)[TrackId]
  isPlaying: boolean
  muted: boolean
  volume: number
  unavailable: boolean
  toggle: () => void
  setMuted: (value: boolean) => void
  setVolume: (value: number) => void
  playTrack: (track: TrackId) => void
}

const MusicContext = createContext<MusicContextValue | null>(null)

export function MusicProvider({ children }: PropsWithChildren) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [track, setTrack] = useState<TrackId>('love-story')
  const [isPlaying, setIsPlaying] = useState(false)
  const [muted, setMutedState] = useState(false)
  const [volume, setVolumeState] = useState(0.55)
  const [unavailable, setUnavailable] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    audio.muted = muted
  }, [muted, volume])

  const attemptPlay = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      await audio.play()
      setIsPlaying(true)
      setUnavailable(false)
    } catch {
      setIsPlaying(false)
      if (audio.error) setUnavailable(true)
    }
  }, [])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) void attemptPlay()
    else {
      audio.pause()
      setIsPlaying(false)
    }
  }, [attemptPlay])

  const playTrack = useCallback(
    (nextTrack: TrackId) => {
      setTrack(nextTrack)
      setUnavailable(false)
      window.setTimeout(() => void attemptPlay(), 0)
    },
    [attemptPlay],
  )

  const setMuted = (value: boolean) => setMutedState(value)
  const setVolume = (value: number) => setVolumeState(value)

  return (
    <MusicContext.Provider
      value={{ track, trackInfo: tracks[track], isPlaying, muted, volume, unavailable, toggle, setMuted, setVolume, playTrack }}
    >
      {children}
      <audio
        ref={audioRef}
        src={tracks[track].src}
        loop
        preload="metadata"
        onError={() => setUnavailable(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </MusicContext.Provider>
  )
}

export function useMusic() {
  const context = useContext(MusicContext)
  if (!context) throw new Error('useMusic must be used within MusicProvider')
  return context
}
