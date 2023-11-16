import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

export function Carousel() {
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
        delay: 2500,
        disableOnInteraction: false
      }}
      loop={true}
      modules={[EffectCoverflow, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <a href="dkd">
          <img src="https://www.thesprucepets.com/thmb/uQnGtOt9VQiML2oG2YzAmPErrHo=/5441x0/filters:no_upscale():strip_icc()/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg" />
          <div className="info">
            <h4>Cat Wiki 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              accusamus culpa ut eaque amet error at odit libero fuga, eos atque
              a nulla maxime magni! Quisquam doloremque laudantium temporibus
              error?
            </p>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="dkd">
          <img src="https://www.salisbury.sa.gov.au/assets/images/Services/_1200x630_crop_center-center_82_none/Services-Pets-Animals-Cats-01.jpg?mtime=1626181965" />
          <div className="info">
            <h4>Cat Wiki 2</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              accusamus culpa ut eaque amet error at odit libero fuga, eos atque
              a nulla maxime magni! Quisquam doloremque laudantium temporibus
              error?
            </p>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="dkd">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FrCPP84Lmc7dranrRsxQ8c1q3guEezmOJIiV3lgidm0kqhu95ojtW6r8tSDJDbiX2TI&usqp=CAU" />
          <div className="info">
            <h4>Cat Wiki 3</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              accusamus culpa ut eaque amet error at odit libero fuga, eos atque
              a nulla maxime magni! Quisquam doloremque laudantium temporibus
              error?
            </p>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="dkd">
          <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" />
          <div className="info">
            <h4>Cat Wiki 4</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              accusamus culpa ut eaque amet error at odit libero fuga, eos atque
              a nulla maxime magni! Quisquam doloremque laudantium temporibus
              error?
            </p>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  )
}
