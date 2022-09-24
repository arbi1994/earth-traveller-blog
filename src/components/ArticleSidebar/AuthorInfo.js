import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// styles
import * as styles from "./styles.module.scss"

const AuthorInfo = ({ name, image, content }) => {
  return (
    <div className={styles.asideAuthor}>
      <figure className={styles.authorImage}>
        <GatsbyImage className={styles.image} image={image} alt={name} />
        <figcaption className={styles.authorDescription}>{content}</figcaption>
      </figure>
      <Link to="/about/" className={styles.authorBtn}>
        About
      </Link>
    </div>
  )
}

export default AuthorInfo
