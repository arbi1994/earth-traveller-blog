import React from "react"
import { Link } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// components
import MobileNav from "./MobileNav"

const Navbar = ({ menu, scrollPosition, toggle, setToggle, socialsTheme }) => {
  const { menuItems } = menu

  const handleLinkColors = () => {
    if (!toggle) {
      if (scrollPosition <= 0) return "white"
      if (scrollPosition > 0) return "black"
    }

    if (toggle) {
      return "black"
    }
  }

  return (
    <>
      {!toggle ? (
        <nav className={!toggle ? styles.navbar : styles.navbarMobile}>
          <ul className={styles.navbarLeft}>
            {menuItems.nodes
              .slice(0, menuItems.nodes.length / 2)
              .map(({ id, uri, label }) => (
                <li key={id}>
                  <Link
                    title={label}
                    to={uri}
                    style={{ color: `${handleLinkColors()}` }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
          </ul>
          <ul className={styles.navbarRight}>
            {menuItems.nodes
              .slice(menuItems.nodes.length / 2)
              .map(({ id, uri, label }) => (
                <li key={id}>
                  <Link
                    title={label}
                    to={uri}
                    style={{ color: `${handleLinkColors()}` }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      ) : (
        <MobileNav
          menuItems={menuItems}
          setToggle={setToggle}
          socialsTheme={socialsTheme}
        />
      )}
    </>
  )
}

export default Navbar
