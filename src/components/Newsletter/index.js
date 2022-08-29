import React from "react"
// styles
import * as styles from "./styles.module.scss"

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterHeading}>
        <h3>Subscribe now</h3>
        <h5>So you don't miss any news on my travel experience</h5>
      </div>
      <form className={styles.newsletterForm}>
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
        <button>Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletter
