import React, { useState, useEffect, useRef } from "react"
import * as styles from "./styles.module.scss"
// components
import Navbar from "./Navbar"
// hooks
import { useMenuQuery } from "../../hooks/useMenuQuery"
import useScrollPosition from "../../hooks/useScrollPosition"
// need to declare the meta site title as a prop

const Header = () => {
  const { site, wpMenu } = useMenuQuery()
  const scrollPosition = useScrollPosition()
  //header ref
  const ref = useRef()

  return (
    <header
      ref={ref}
      className={
        styles.header + " " + `${scrollPosition > 0 ? styles.scrolled : null}`
      }
    >
      <Navbar site={site} menu={wpMenu} scrollPosition={scrollPosition} />
    </header>
  )
}

export default Header
