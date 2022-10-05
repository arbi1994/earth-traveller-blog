import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
// styles
import * as styles from "./styles.module.scss"

const PageHero = ({ data, currentPage }) => {

  return (
    <section id="page-hero" className={styles.hero}>
      <GatsbyImage
        className={styles.heroImage}
        image={data?.featuredImage?.node?.gatsbyImage}
        alt={data?.title}
      />
      <div className={styles.title}>
        <h4>{data?.title}{currentPage > 1 ? ' / ' + currentPage : null}</h4>
        <hr />
      </div>
    </section>
  )
}

export default PageHero
