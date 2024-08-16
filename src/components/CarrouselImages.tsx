import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import { ImgViewer } from "./ImgViewer";

interface ICarrouselImagesProps {
  images: string[]
}

export default function CarrouselImages({ images }: ICarrouselImagesProps) {

  const [selectedImage, setSelectedImage] = useState({
    src: '',
    alt: ''
  })
  const [imgViewerOpen, setImgViewerOpen] = useState(false)

  function openImgViewer(src: string, alt: string) {
    setSelectedImage({src, alt})
    setImgViewerOpen(true)
  }

  return (
    <>
    <h2 className="text-3xl font-semibold transition-colors hover:text-cyan-200 text-center">
      Galeria
    </h2>

    <Swiper
      loop
      slidesPerView={"auto"}
      className="w-full cursor-grab"
      modules={[Pagination, Navigation]}
      spaceBetween={14}
    >
      {
        images.map((image, index) => (
          <SwiperSlide key={index} className="h-72 transition-transform hover:scale-105" style={{width: '12rem !important'}} tag="button" onClick={() => openImgViewer(image, `${index}`)}>
            <img src={image} alt={`Image ${index}`} className="w-56 h-72 rounded-md"/>
          </SwiperSlide>
        ))
      }
    </Swiper>

    <ImgViewer
      alt={selectedImage.alt}
      src={selectedImage.src}
      open={imgViewerOpen}
      close={() => setImgViewerOpen(false)}
    />
    </>
  )
}