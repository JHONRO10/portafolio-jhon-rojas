import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problema from '@/components/Problema'
import AriaDemo from '@/components/AriaDemo'
import CasosExito from '@/components/CasosExito'
import Servicios from '@/components/Servicios'
import Proceso from '@/components/Proceso'
import Historia from '@/components/Historia'
import Stack from '@/components/Stack'
import CtaFinal from '@/components/CtaFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="divider" />
      <Problema />
      <AriaDemo />
      <div className="divider" />
      <CasosExito />
      <Servicios />
      <Proceso />
      <Historia />
      <Stack />
      <CtaFinal />
      <Footer />
    </>
  )
}
