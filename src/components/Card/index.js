import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
// styles
import * as styles from "./styles.module.scss"

const Card = ({ data, pathname }) => {

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
          {pathname !== "/countries/" ? (
            <strong className={styles.date}>{data?.date}</strong>
          ) : null}
          {pathname !== "/countries/" ? (
            <h6>{data?.title}</h6>
          ) : (
            <h5>{data?.title}</h5>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
