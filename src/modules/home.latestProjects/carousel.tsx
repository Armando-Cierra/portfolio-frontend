import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import type { Props, Project } from './types'

export function Carousel({ projects }: Props) {
  function getTime(date: string) {
    return new Date(date).getTime()
  }

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      loop={true}
      modules={[EffectCoverflow, Autoplay]}
      className="mySwiper"
    >
      {projects.map((project) => {
        const {
          attributes: {
            name,
            slug,
            shortDescription,
            cover: {
              data: {
                attributes: { name: altCoverText, url }
              }
            }
          }
        } = project as Project
        return (
          <SwiperSlide key={slug}>
            <a href={`/projects/${slug}`}>
              <img src={url} alt={altCoverText} />
              <div className="info">
                <h4>{name}</h4>
                <p>{shortDescription}</p>
              </div>
            </a>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
