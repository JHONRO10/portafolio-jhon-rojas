export default function Footer() {
  return (
    <footer
      className="py-8 px-8 text-center text-sm"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        color: 'var(--muted)',
      }}
    >
      <p>
        © 2026{' '}
        <span style={{ color: 'var(--cyan)' }}>Jhon Rojas</span>
        {' '}· Sistemas AI para Negocios · Bogotá, Colombia
      </p>
    </footer>
  )
}
