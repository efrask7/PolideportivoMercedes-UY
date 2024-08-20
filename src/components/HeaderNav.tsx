import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import NavResponsive from "./NavResponsive";

export default function HeaderNav() {

  const [linkActive, setLinkActive] = useState(0)

  useEffect(() => {
    const scrollListener = () => {
      const sections = [document.getElementById('main'), document.getElementById('about'),document.getElementById('pruebaPista'), document.getElementById('tracks'),  document.getElementById('events')] as HTMLElement[]
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setLinkActive(index)
        }
      })
    }
    window.addEventListener('scroll', scrollListener)
  }, [])

  return (
    <>
    <div className="lg:flex hidden gap-16">
      <NavLink name="Inicio" url="#main" isActive={linkActive==0} />
      <NavLink name="Historia" url="#about" isActive={linkActive==1} />
      <NavLink name="Prueba de Pista" url="#pruebaPista" isActive={linkActive==2} />
      <NavLink name="Pistas" url="#tracks" isActive={linkActive==3} />
      <NavLink name="Eventos" url="#events" isActive={linkActive==4} />
    </div>

    <div className="flex lg:hidden">
      <NavResponsive/>
    </div>
    </>
  )
}