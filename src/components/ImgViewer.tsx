import { useCallback, useEffect, type MouseEvent } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

interface IImgViewerProps {
  open: boolean
  close: () => void
  src: string
  alt: string
  buttons?: {
    prevBtn: (ev?: MouseEvent) => void
    nextBtn: (ev?: MouseEvent) => void
  }
}

const buttonStyle = "p-2 rounded-full bg-cyan-400/80 hover:bg-cyan-500/80 text-4xl z-[51]";

export function ImgViewer({ src, alt, open, close, buttons }: IImgViewerProps) {

  const handleClose = useCallback(() => {
    close()
  }, [close, open])

  useEffect(() => {
    if (buttons) {

      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === "ArrowLeft") buttons.prevBtn()
        if (ev.key === "ArrowRight") buttons.nextBtn()
      }

      window.addEventListener("keydown", handleKeyDown)

      return () => {
        window.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [buttons])

  return (
    <div 
      className={`${open ? "opacity-100" : "opacity-0 pointer-events-none"} fixed top-0 md:gap-4 left-0 z-50 size-full flex items-center flex-col md:flex-row justify-center transition-opacity bg-neutral-800/75 select-none p-12`}
      onClick={() => handleClose()}
      role="button"
    >
      <img 
        src={src} 
        alt={alt} 
        className={`w-auto max-h-full ${open ? "scale-100" : "scale-0"}`}
        onClick={ev => ev.stopPropagation()}
        style={{
          transition: "transform .3s cubic-bezier(0.44, 0.02, 0.47, 0.95)"
        }}  
      />
      {
        buttons && (
          <div className="flex gap-2 absolute top-1/2 w-full justify-between px-4">
            <button onClick={(ev) => buttons.prevBtn(ev)} className={`${buttonStyle}`} aria-label="Imagen anterior">
              <BiChevronLeft/>
            </button>
            <button onClick={(ev) => buttons.nextBtn(ev)} className={`${buttonStyle}`} aria-label="Siguiente imagen">
              <BiChevronRight/>
            </button>
          </div>
        )
      }
    </div>
  )
}