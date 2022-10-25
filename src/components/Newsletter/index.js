import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
// styles
import * as styles from "./styles.module.scss"

const Newsletter = () => {
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  //form states
  const [state, setState] = useState({
    name: "",
    email: "",
    result: null,
  })

  //values destructured
  const { name, email } = state

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

  const handleChange = e => {
    const { name, value } = e.target

    setState(() => {
      return {
        ...state,
        [name]: value,
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const result = await addToMailchimp(email, { FNAME: name })

    setState({ result: result })

    //reset inputs
    const inputs = document.querySelectorAll("form input")
    inputs.forEach(input => {
      input.value = ""
    })
  }

  return (
    <div className={newsletterStyle()}>
      <div className={styles.newsletterHeading}>
        {url !== "/" ? <h4>Subscribe</h4> : <h3>Subscribe now</h3>}
        {url !== "/" ? null : (
          <h5>So you don't miss any news on my travel experience</h5>
        )}
      </div>
      <form className={formStyle()} onSubmit={handleSubmit}>
        <div className={styles.newsletterWrapper}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            onChange={handleChange}
          />
          <hr />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            onChange={handleChange}
          />
        </div>
        <button className={buttonStyle()} type="submit">
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default Newsletter
