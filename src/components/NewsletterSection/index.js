import React from "react"
// styles
import * as styles from "./styles.module.scss"
// components
import Newsletter from "../Newsletter"

const NewsletterSection = () => {
  return (
    <section className={styles.container}>
      <Newsletter />
    </section>
  )
}

export default NewsletterSection
