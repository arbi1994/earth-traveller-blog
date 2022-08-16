import React from "react"
// styles
import * as styles from "./styles.module.scss"
import { Link } from "gatsby"

const Navbar = ({ menu, scrollPosition }) => {
  const { menuItems } = menu

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
