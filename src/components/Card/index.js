import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
// styles
import * as styles from "./styles.module.scss"

const Article = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.image}>
          <GatsbyImage
            image={data?.featuredImage?.node?.gatsbyImage}
            alt={data?.title}
          />
        </div>
        <div className={styles.title}>
          <strong>date</strong>
          <h6>{data?.title}</h6>
        </div>
      </div>
    </div>
  )
}

export default Article
