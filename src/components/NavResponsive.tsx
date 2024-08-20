import { RiFunctionLine } from "react-icons/ri"
import NavLink from "./NavLink"
import { BsX } from "react-icons/bs"
import { useState } from "react"

export default function NavResponsive() {

  const [open, setOpen] = useState(false)

  return (
    <>
    <button className="text-2xl" onClick={() => setOpen(true)} aria-label="Abrir menu de navegación">
      <RiFunctionLine />
    </button>

    <div 
      className={`absolute flex justify-end ${open ? "right-0": "-right-full"} top-0 w-full h-[112vh] bg-neutral-900/60 transition-all`}
      onClick={() => setOpen(false)}
    >
      <nav 
        className="w-3/4 h-full bg-neutral-900 flex flex-col gap-8 justify-center items-center text-4xl"
        onClick={ev => ev.stopPropagation()}
      >
        <button className="absolute top-10 right-12 text-6xl" onClick={() => setOpen(false)} aria-label="Cerrar menu de navegación">
          <BsX/>
        </button>
        <NavLink name="Inicio" url="#main" />
        <NavLink name="Historia" url="#about" />
        <NavLink name="Prueba de Pista" url="#pruebaPista" />
        <NavLink name="Pistas" url="#tracks" />
        <NavLink name="Eventos" url="#events" />
      </nav>
    </div>
    </>
  )
}