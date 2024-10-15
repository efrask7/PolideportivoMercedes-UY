import { IoHome, IoNewspaper } from "react-icons/io5"
import { BsEnvelope, BsPhoneFill } from "react-icons/bs"
import { useEffect, useRef, useState } from "react"
import * as React from "react"

const menu = [
  { url: '/', icon: <IoHome/> },
  { url: '/historia', icon: <IoNewspaper/> },
  { url: '/', icon: <BsPhoneFill/> },
  { url: '/', icon: <BsEnvelope/> },
]

export default function MenuBar() {
  const navRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInside, setIsMouseInside] = useState(false)

  useEffect(() => {
    function handleMouseMove(ev: MouseEvent) {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    function handleMouseEnter() {
      setIsMouseInside(true)
    }

    function handleMouseLeave() {
      setIsMouseInside(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    if (navRef.current) {
      navRef.current.addEventListener('mouseenter', handleMouseEnter)
      navRef.current.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (navRef.current) {
        navRef.current.removeEventListener('mouseenter', handleMouseEnter)
        navRef.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <nav 
      ref={navRef} 
      className="fixed z-[10000] bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#161616] w-auto px-4 h-[4.2rem] justify-center rounded-full"
    >
      {menu.map((item, i) => {
        const aRef = useRef<HTMLAnchorElement>(null)
        const [itemSize, setItemSize] = useState(48)
        const [onAnimation, setOnAnimation] = useState(false)
        const [onTransition, setOnTransition] = useState(false)
        
        useEffect(() => {
          if (!aRef.current || !navRef.current) return

          const aRect = aRef.current.getBoundingClientRect()
          const navRect = navRef.current.getBoundingClientRect()

          const centerX = aRect.left + aRect.width / 2
          const distanceFromCursor = Math.abs(mousePosition.x - centerX)
          const maxDistance = navRect.width / 2

          // Función de escala ajustada para un decrecimiento más rápido
          const scaleFactor = isMouseInside 
            ? Math.max(0, 1 - Math.pow(distanceFromCursor / (maxDistance * 0.5), 4))
            : 0
          
          const minSize = 48
          const maxSize = 72
          const newSize = minSize + scaleFactor * (maxSize - minSize)

          requestAnimationFrame(() => {
            setItemSize(newSize)
          })
        }, [mousePosition, isMouseInside])

        useEffect(() => {
          if (!aRef.current) return

          if (onAnimation && !onTransition) {
            setOnAnimation(false)
          }
        }, [onAnimation, aRef, onTransition])

        const handleOnClick = React.useCallback((ev: React.MouseEvent, url: string) => {
          if (window.location.pathname === url) {
            ev.preventDefault()
          }          
          
          if (!aRef.current) return
          setOnTransition(true)
          setOnAnimation(true)
        }, [aRef])

        return (
          <a 
            ref={aRef}
            href={item.url}
            onTransitionEnd={() => setOnTransition(false)}
            key={i} 
            className="grid place-content-center bg-[#232323] text-[#7E7E7E] rounded-full transition-all duration-200 ease-out"
            style={{
              width: itemSize,
              height: itemSize,
              transform: onAnimation ? 'translateY(-1rem)' : 'translateY(0)'
            }}
            onClick={(e) => handleOnClick(e, item.url)}
          >
            {React.cloneElement(item.icon, { 
              size: itemSize * 0.5,
              className: "transition-all duration-200 ease-out"
            })}
          </a>
        )
      })}
    </nav>
  )
}