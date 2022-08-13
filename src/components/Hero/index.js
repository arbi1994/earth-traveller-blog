import React from 'react'
import * as styles from './styles.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <StaticImage 
        className={styles.bgImage}
        src="../../images/homepage-hero.jpg" 
        alt="" 
        placeholder="blurred"
        quality="100"
      />
      <div className={styles.content}>
        <p>not all those who wander are lost</p>
        <strong>J.R.R. Tolkien</strong>
      </div>
    </section>
  )
}

export default Hero