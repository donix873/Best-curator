export function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden="true">
      <div className="ambient__orb ambient__orb--one" />
      <div className="ambient__orb ambient__orb--two" />
      <div className="ambient__stars" />
      {Array.from({ length: 12 }, (_, index) => (
        <span
          className="ambient__particle"
          key={index}
          style={{ '--i': index } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
