const WA = 'https://wa.me/573006800524?text=Hola%20Jhon%2C%20quiero%20agendar%20una%20hora'

export default function Nav() {
  return (
    <nav>
      <span className="logo">JHON ROJAS</span>
      <div className="menu">
        <a href="#preguntas">Quién soy</a>
        <a href="#proceso">El proceso</a>
        <a href="#formatos">Formatos</a>
      </div>
      <a className="btn" href={WA} target="_blank" rel="noopener noreferrer">Hablemos</a>
    </nav>
  )
}
