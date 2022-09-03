import React from "react"
// styles
import * as styles from "./styles.module.scss"
// components
import Header from "../Header"
import Footer from "../Footer"

//every page must have a header and a footer component

const Layout = ({ children, socialsTheme }) => {
  return (
    <section className={styles.container}>
      <Header socialsTheme={socialsTheme} />
      {children}
      <Footer />
    </section>
  )
}

export default Layout
