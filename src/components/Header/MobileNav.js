import React from "react"
import { Link } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// logo image
import LogoBlack from "../../images/logo-black.svg"
// icons
import { CgClose } from "react-icons/cg"
// components
import Socials from "../Socials/index"

const MobileNav = ({ menuItems, setToggle, socialsTheme }) => {
  const handleClick = () => setToggle(false)

  return (
    <div className={styles.mobileNav}>
      <div className={styles.mobileNavHeading}>
        <div className={styles.mobileNavLogo}>
          <img src={LogoBlack} alt="logo" />
        </div>
        <button className={styles.mobileNavCloseBtn}>
          <CgClose onClick={handleClick} />
        </button>
      </div>
      <div className={styles.mobileNavWrapper}>
        {menuItems.nodes.map(({ id, url, label }) => (
          <li key={id}>
            <Link to={url} style={{ color: "black" }}>
              {label}
            </Link>
          </li>
        ))}
      <hr/>
      <Socials socialsTheme={socialsTheme} />
      </div>
    </div>
  )
}

export default MobileNav
