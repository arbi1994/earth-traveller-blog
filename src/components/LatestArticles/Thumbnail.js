import React, { useState } from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// styles
import * as styles from "./styles.module.scss"

const Thumbnail = ({ data, images }) => {
  const [isMouseOver, setIsMouseOver] = useState(false)

  return (
    <div
      className={styles.thumbnail}
      onMouseOver={() => setIsMouseOver(true)}
      onFocus={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div className={styles.thumbnailHeading}>
        <h5 className={styles.title}>{data?.title}</h5>
      </div>
      <div className={styles.thumbnailSubheading}>
        <h6 className={styles.date}>{data?.date}</h6>
      </div>
      <div className={styles.thumbnailImage}>
        <GatsbyImage image={images?.node?.gatsbyImage} alt="" loading="lazy" />
      </div>
      {isMouseOver ? (
        <div className={styles.thumbnailLink}>
          <Link to={data?.uri}>
            <h6>Read</h6>
          </Link>
        </div>
      ) : null}
    </div>
  )
}

export default Thumbnail
