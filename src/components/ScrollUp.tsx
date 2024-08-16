import { useCallback, useEffect, useRef, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function ScrollUp() {

  const btnRef = useRef<HTMLButtonElement | null>(null)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    if (!btnRef.current) return

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        console.log('si')
        setOpacity(100)
      } else {
        console.log('no')
        setOpacity(0)
      }
    })

  }, [btnRef, setOpacity])

  const scrollUp = useCallback(() => {
    if (!btnRef.current || opacity === 0) return
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }, [btnRef, opacity])

  return (
    <button
      className={`
        right-0 
        bottom-0 
        -translate-x-10 
        -translate-y-10 
        fixed 
        py-2 px-2 
        rounded-lg 
        bg-cyan-400/80 hover:bg-cyan-500/80 
        transition-opacity 
        text-lg`
      }
      style={{
        opacity: opacity,
        cursor: opacity === 0 ? "default" : "pointer"
      }}
      ref={btnRef}
      onClick={() => scrollUp()}
    >
      <BsArrowUp />
    </button>
  )
}
