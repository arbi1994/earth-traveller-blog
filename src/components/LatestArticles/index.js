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
import { EffectCoverflow, Navigation, Lazy } from "swiper"
// components
import Thumbnail from "./thumbnail"
// hooks
import { useArticlesQuery } from "../../hooks/useArticlesQuery"
import useWindowSize from "../../hooks/useWindowSize"

const LatestArticles = () => {
  const data = useArticlesQuery()
  const [width] = useWindowSize()

  const { allWpPost } = data

  return (
    <Swiper
      effect={"coverflow"}
      centeredSlides={true}
      grabCursor={false}
      navigation={true}
      lazy={true}
      pagination={{
        clickable: false,
      }}
      spaceBetween={0}
      slidesPerView={width < 768 ? 1 : 1.5}
      modules={[Navigation, Lazy, EffectCoverflow]}
      className={styles.mySwiper}
    >
      {allWpPost?.edges?.map(({ node }) => (
        <SwiperSlide key={node?.id}>
          <Thumbnail data={node} images={node?.featuredImage} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default LatestArticles
