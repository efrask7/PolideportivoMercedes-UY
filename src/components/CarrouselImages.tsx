import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules";
import { useCallback, useState, type MouseEvent } from "react";
import { ImgViewer } from "./ImgViewer";

interface ICarrouselImagesProps {
  images: string[]
}

export default function CarrouselImages({ images }: ICarrouselImagesProps) {

  const [selectedImage, setSelectedImage] = useState(0)
  const [imgViewerOpen, setImgViewerOpen] = useState(false)

  function openImgViewer(index: number) {
    setSelectedImage(index)
    setImgViewerOpen(true)
  }

  const prevImage = useCallback((ev?: MouseEvent) => {
    setSelectedImage(prev => {
      if (prev <= 0) return images.length - 1
      return prev-1
    })
    if (ev) ev.stopPropagation()
  }, [selectedImage, images])

  const nextImage = useCallback((ev?: MouseEvent) => {
    setSelectedImage(prev => {
      if (prev >= images.length - 1) return 0
      return prev+1
    })
    if (ev) ev.stopPropagation()
  }, [selectedImage, images])

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
          <SwiperSlide key={index} className="h-72 transition-transform hover:scale-105" style={{width: '12rem !important'}} tag="button" onClick={() => openImgViewer(index)}>
            <img src={image} alt={`Image ${index}`} className="w-56 h-72 rounded-md"/>
          </SwiperSlide>
        ))
      }
    </Swiper>

    <ImgViewer
      src={images[selectedImage]}
      alt={`Img-${selectedImage}`}
      open={imgViewerOpen}
      close={() => setImgViewerOpen(false)}
      buttons={{
        prevBtn: prevImage,
        nextBtn: nextImage
      }}
    />
    </>
  )
}