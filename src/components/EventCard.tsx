import { useCallback, useEffect, useRef, useState, } from "react"
import { ImgViewer } from "./ImgViewer"
import { BsArrowRight } from "react-icons/bs"

interface IEventCardProps {
  src: string
  alt: string
  url?: string
  from: 'left' | 'right'
}

export default function EventCard({ src, alt, url, from }: IEventCardProps) {
  
  const [imgOpened, setImgOpened] = useState(false)
  const [visible, setVisible] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  const handleOpenImage = useCallback(() => {
    if (url || imgOpened) return
    setImgOpened(true)
  }, [url, imgOpened])

  function handleCloseImage() {
    setImgOpened(false)
  }

  useEffect(() => {
    if (!divRef.current) return
    function handleWindowScroll() {
      if (window.scrollY + window.innerHeight > divRef.current!.offsetTop) {
        setVisible(true)
        window.removeEventListener('scroll', () => {})
      }
    }
    window.addEventListener('scroll', handleWindowScroll)

    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [divRef])
  
  return (
    <>
    <div 
      className={`relative ${from === 'left' ? 'transition-from-left' : 'transition-from-right'} ${visible ? 'loaded' : ''}`}
      onClick={() => handleOpenImage()}
      role={!url ? "button" : undefined}
      ref={divRef}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-full md:size-96"
      />
      {
        url 
        && 
          <a href={url} aria-label="Abrir vinculo de la imagen" className="absolute right-0 bottom-0 py-3 px-4 rounded-tl-lg bg-cyan-400/80 hover:bg-cyan-500/80 text-lg" target="_blank">
            <BsArrowRight/>
          </a>
      }
    </div>

    {
      !url
      &&
      <ImgViewer src={src} alt={alt} open={imgOpened} close={handleCloseImage}/>
    }
    </>
  )
}