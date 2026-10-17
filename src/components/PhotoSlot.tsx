export default function PhotoSlot({
  label,
  sublabel,
  aspectRatio,
  style,
  dark,
  ancha,
}: {
  label: string
  sublabel: string
  aspectRatio?: string
  style?: React.CSSProperties
  dark?: boolean
  /** Banda a todo el ancho: se achata en celular igual que la foto real que reemplaza. */
  ancha?: boolean
}) {
  return (
    <div className={ancha ? 'ph ph-ancha' : 'ph'} style={{ aspectRatio, ...style }}>
      <b style={dark ? { color: '#9AA79C' } : undefined}>{label}</b>
      <span style={dark ? { color: '#6E7A6E' } : undefined}>{sublabel}</span>
    </div>
  )
}
