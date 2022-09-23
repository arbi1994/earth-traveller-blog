import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// styles
import * as styles from "./styles.module.scss"

const ArticleHero = ({ data }) => {
  const author = { ...data?.author?.node }

  return (
    <section className={styles.hero}>
      <GatsbyImage
        className={styles.heroImage}
        image={data?.featuredImage?.node?.gatsbyImage}
        alt={data?.title}
      />
      <div className={styles.heroWrapper}>
        <div className={styles.heroTitle}>
          <h1>{data?.title}</h1>
        </div>
        <div className={styles.heroTags}>
          <h6>{data?.tags?.nodes[0]?.name}</h6> <span>|</span>{" "}
          <h6>{data?.tags?.nodes[1]?.name}</h6>
        </div>
        <div className={styles.heroCredits}>
          <p>
            by{" "}
            <Link to="/about/">
              {author.firstName} {author.lastName}
            </Link>
            ,&nbsp; on {data?.date}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ArticleHero
