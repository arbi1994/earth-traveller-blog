import React from "react"
// styles
import * as styles from "./styles.module.scss"

const Newsletter = () => {
  const url = typeof window !== "undefined" ? window.location.pathname : ""
  console.log(url)

  const newsletterStyle = () => {
    if (url !== "/") return `${styles.newsletter} ${styles.newsletterArticle}`
    return styles.newsletter
  }

  const formStyle = () => {
    if (url !== "/") return styles.newsletterFormArticle
    return 
  }

  const buttonStyle = () => {
    if (url !== "/") return styles.btnArticle
    return 
  }

  return (
    <div className={newsletterStyle()}>
      <div className={styles.newsletterHeading}>
        {url !== "/" ? <h4>Subscribe</h4> : <h3>Subscribe now</h3>}
        {url !== "/" ? null : (
          <h5>So you don't miss any news on my travel experience</h5>
        )}
      </div>
      <form className={formStyle()}>
        <div className={styles.newsletterWrapper}>
          <input type="text" id="name" name="name" placeholder="Your name" />
          <hr />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />
        </div>
        <button className={buttonStyle()} type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletter
