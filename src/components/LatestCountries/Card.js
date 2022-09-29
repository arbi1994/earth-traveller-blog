import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// styles
import * as styles from "./styles.module.scss"

const Card = ({ props }) => {
  console.log(props)
  return (
    <Link key={props?.id} className={styles.card} to={props?.uri}>
      <div className={styles.cardImage}>
        <GatsbyImage
          image={props?.featuredImage?.node?.gatsbyImage}
          alt={props?.title}
          className={styles.transition}
          loading="lazy"
        />
      </div>
      <div className={styles.cardTitle}>
        <strong>{props?.title}</strong>
      </div>
    </Link>
  )
}

export default Card
