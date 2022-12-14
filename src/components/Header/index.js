import React, { useState, useEffect, useRef } from "react"
// styles
import * as styles from "./styles.module.scss"
// hooks
import { useMenuQuery } from "../../hooks/useMenuQuery"
import useScrollPosition from "../../hooks/useScrollPosition"
import useWindowSize from "../../hooks/useWindowSize"
// icons
import { BsThreeDots } from "react-icons/bs"
// components
import Navbar from "./Navbar"
import Logo from "./Logo"

// need to declare the meta site title as a prop

const Header = ({ socialsTheme }) => {
  const { site, wpMenu } = useMenuQuery()
  const scrollPosition = useScrollPosition()
  const width = useWindowSize()
  const [toggle, setToggle] = useState(false)
  //header ref
  const ref = useRef()
  // site metadata
  const { siteMetadata } = site
  // handle menuIcon on click event
  const handleClick = () => setToggle(true)

  useEffect(() => {
    scrollPosition > 0
      ? (ref.current.style.minHeight = `${width[0] <= 768 ? "9em" : "12em"}`) //when header is in scroll position > 0
      : (ref.current.style.minHeight = `${width[0] > 768 ? "15em" : "12em"}`) //when header is in scroll position 0
  }, [scrollPosition, width])

  return (
    <header
      ref={ref}
      className={`${styles.header} ${scrollPosition > 0 ? styles.scrolled : null}`}
      id={scrollPosition > 0 ? 'header-scrolled' : 'header'}
    >
      <Logo scrollPosition={scrollPosition} siteMetadata={siteMetadata} />
      <Navbar
        site={site}
        menu={wpMenu}
        scrollPosition={scrollPosition}
        toggle={toggle}
        setToggle={setToggle}
        socialsTheme={socialsTheme}
      />
      <button
        className={[
          `${scrollPosition <= 0 ? styles.menuIcon : styles.menuIconScrolled}`,
        ]}
        onClick={handleClick}
      >
        <BsThreeDots />
      </button>
    </header>
  )
}

export default Header
