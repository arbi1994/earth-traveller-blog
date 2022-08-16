import React from 'react'
import * as styles from './styles.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
// components
import Socials from '../Socials/index'
// hooks
import { useSocialsQuery } from "../../hooks/useSocialsQuery"

const Hero = ({ socialsTheme }) => {
  const { wpMenu } = useSocialsQuery()

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
      <Socials socials={wpMenu} socialsTheme={socialsTheme} />
    </section>
  )
}

export default Hero