import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import * as styles from "./styles.module.scss"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/lazy"
// import required modules
import { EffectCoverflow, Pagination, Navigation, Lazy } from "swiper"
// components
import Thumbnail from './thumbnail'

const SectionSwiper = ({ data }) => {
  return (
    <Swiper
      // effect={"coverflow"}
      centeredSlides={true}
      grabCursor={true}
      navigation={true}
      lazy={true}
      pagination={{
        clickable: true,
      }}
      spaceBetween={0}
      slidesPerView={1}
      modules={[EffectCoverflow, Pagination, Navigation, Lazy]}
      className={styles.mySwiper}
    >
      {data.map((data, index) => (
        <SwiperSlide key={index}>
          <Thumbnail data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SectionSwiper
