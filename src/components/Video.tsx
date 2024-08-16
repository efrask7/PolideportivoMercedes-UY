import { useCallback, useRef, useState } from "react"
import { BsPlay, BsPause } from "react-icons/bs"

interface IVideoProps {
  title?: string
  src: string
  id?: string
}


export default function Video({ title, src, id }: IVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [isPlaying, setIsPlaying] = useState(false)

  const handleToggleVideo = useCallback(() => {
    if (!videoRef.current) return

    setIsPlaying(playing => {
      if (playing) {
        videoRef.current?.pause()
        return false        
      }

      videoRef.current?.play()
      return true
    })
  }, [videoRef])
  
  return (
    <div
      className="w-full lg:w-3/4 aspect-video m-auto relative rounded-lg overflow-hidden flex flex-col gap-8"
      id={id}
    >
      {
        title && (
          <h2 className="text-3xl font-semibold transition-colors hover:text-cyan-200 text-center">
            {title}
          </h2>
        )
      }

      <video src={src} className="w-full" ref={videoRef} />
      <button
        onClick={() => handleToggleVideo()}
        className="absolute right-8 bottom-4 z-10 bg-cyan-400/80 hover:bg-cyan-500/80 py-2 px-4 rounded-md font-bold transition-colors text-2xl"
      >
        {
          isPlaying
          ? <BsPause/>
          : <BsPlay/>
        }        
      </button>
    </div>
  )
}