import React from 'react'
import * as styles from './styles.module.scss'
// components
import Header from '../Header/index'
import Footer from '../Footer/index'

//every page must have a header and a footer component

const Layout = ({ children }) => {
  return (
    <section className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </section>
  )
}

export default Layout