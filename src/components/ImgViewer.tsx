import { useCallback } from "react"

interface IImgViewerProps {
  open: boolean
  close: () => void
  src: string
  alt: string
}

export function ImgViewer({ src, alt, open, close }: IImgViewerProps) {

  const handleClose = useCallback(() => {
    close()
  }, [close, open])

  return (
    <div 
      className={`${open ? "opacity-100" : "opacity-0 pointer-events-none"} fixed top-0 left-0 z-50 size-full flex items-center justify-center transition-opacity bg-neutral-800/75 select-none p-4`}
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
    </div>
  )
}