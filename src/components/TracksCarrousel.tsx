import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ITrack {
  title: string
  image: string
  mts: string
}

interface ITracksCarrouselProps {
  title: string
  subtitle?: string
  tracks: ITrack[]
  from: 'left' | 'right'
}

export default function TracksCarrousel({ title, subtitle, tracks, from }: ITracksCarrouselProps) {

  const [visible, setVisible] = useState(false)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!divRef.current) return
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight > divRef.current!.offsetTop) {
        setVisible(true)
        window.removeEventListener('scroll', () => {})
      }
    })
  }, [divRef])

  return (
    <div className={`flex flex-col gap-8 ${from === 'left' ? 'transition-from-left' : 'transition-from-right'} ${visible && 'loaded'}`} ref={divRef}>
      <h2 className="text-3xl font-semibold transition-colors hover:text-cyan-200 text-center">
        {title}
      </h2>

      <Swiper
        loop
        autoplay
        className="w-full lg:w-[50rem] bg-cyan-400/80 rounded-md m-auto"
        slidesPerView={1}
        modules={[Pagination, Navigation, Autoplay]}
        grabCursor
      >
        {
          tracks.map((track, index) => (
            <SwiperSlide key={index} >
              <div className="flex flex-col gap-4 items-center py-10 px-4 md:px-16 ">
                <div className="flex justify-between w-full text-3xl" style={{fontFamily: 'Raleway'}}>
                  <div>
                    <h3>{track.title}</h3>
                    {subtitle && <h4 className="text-sm text-neutral-200/80 mt-2">{subtitle}</h4>}
                  </div>

                  <h3>{track.mts} Mts</h3>
                </div>

                <img src={track.image} alt={track.title} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}