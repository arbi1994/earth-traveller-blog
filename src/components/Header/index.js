import React, { useEffect, useRef } from "react"
// styles
import * as styles from "./styles.module.scss"
// components
import Navbar from "./Navbar"
// hooks
import { useMenuQuery } from "../../hooks/useMenuQuery"
import useScrollPosition from "../../hooks/useScrollPosition"
import useWindowSize from "../../hooks/useWindowSize"
// icons
import { BsThreeDots } from "react-icons/bs"
// components
import Logo from "./Logo"

// need to declare the meta site title as a prop

const Header = () => {
  const { site, wpMenu } = useMenuQuery()
  const scrollPosition = useScrollPosition()
  const width = useWindowSize()
  //header ref
  const ref = useRef()
  // site metadata
  const { siteMetadata } = site

  useEffect(() => {
    scrollPosition > 0
      ? (ref.current.style.minHeight = `${width[0] <= 1024 ? '14vh' : '20vh'}`)
      : (ref.current.style.minHeight = `${width[0] <= 1024 ? '16vh' : '25vh'}`)
  }, [scrollPosition])

  return (
    <header
      ref={ref}
      className={
        styles.header + " " + `${scrollPosition > 0 ? styles.scrolled : null}`
      }
    >
      <Logo
        scrollPosition={scrollPosition}
        siteMetadata={siteMetadata}
        width={width}
      />
      <Navbar site={site} menu={wpMenu} scrollPosition={scrollPosition} />
      <div className={[`${scrollPosition <= 0 ? styles.menuIcon : styles.menuIconScrolled}`]}>
        <BsThreeDots />
      </div>
    </header>
  )
}

export default Header
