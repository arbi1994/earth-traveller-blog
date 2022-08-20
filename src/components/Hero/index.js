import React from 'react'
import * as styles from './styles.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
// components
import Socials from '../Socials/index'

const Hero = ({ socialsTheme }) => {
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
        <h1>not all those who wander are lost</h1>
        <strong>J.R.R. Tolkien</strong>
      </div>
      <Socials socialsTheme={socialsTheme} />
    </section>
  )
}

export default Hero