export default function PhotoSlot({
  label,
  sublabel,
  aspectRatio,
  style,
  dark,
}: {
  label: string
  sublabel: string
  aspectRatio?: string
  style?: React.CSSProperties
  dark?: boolean
}) {
  return (
    <div className="ph" style={{ aspectRatio, ...style }}>
      <b style={dark ? { color: '#9AA79C' } : undefined}>{label}</b>
      <span style={dark ? { color: '#6E7A6E' } : undefined}>{sublabel}</span>
    </div>
  )
}
