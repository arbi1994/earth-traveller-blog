import React from 'react'
import * as styles from './styles.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <StaticImage 
        src="../../images/homepage-hero.jpg" 
        alt="" 
        placeholder="blurred"
        quality="100"
        formats={["auto", "webp", "avif"]}
      />
    </section>
  )
}

export default Hero