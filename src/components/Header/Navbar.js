import React, { useEffect, useRef } from "react"
import * as styles from "./styles.module.scss"
import { Link } from "gatsby"
// logo
import Logo from "../../images/logo.svg"
import LogoBlack from "../../images/logo_black.svg"

const Navbar = ({ site, menu, scrollPosition }) => {
  const { menuItems } = menu
  const { siteMetadata } = site
  const logoRef = useRef()

  useEffect(() => {
    scrollPosition > 0
      ? (logoRef.current.style.width = "4em")
      : (logoRef.current.style.width = "5em")
  }, [scrollPosition])

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLeft}>
        {menuItems.nodes
          .slice(0, menuItems.nodes.length / 2)
          .map(({ id, url, label }) => (
            <li key={id}>
              <Link
                to={url}
                style={{ color: `${scrollPosition <= 0 ? "white" : "black"}` }}
              >
                {label}
              </Link>
            </li>
          ))}
      </ul>
      <Link className={styles.logo} to="/">
        <img
          ref={logoRef}
          src={scrollPosition <= 0 ? Logo : LogoBlack}
          alt={siteMetadata.title}
        />
      </Link>
      <ul className={styles.navbarRight}>
        {menuItems.nodes
          .slice(menuItems.nodes.length / 2)
          .map(({ id, url, label }) => (
            <li key={id}>
              <Link
                to={url}
                style={{ color: `${scrollPosition <= 0 ? "white" : "black"}` }}
              >
                {label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Navbar
