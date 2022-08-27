import React from "react"
import { Link } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// logo images
import LogoWhite from "../../images/logo-white.svg"
import LogoBlack from "../../images/logo-black.svg"

const Logo = ({ scrollPosition, siteMetadata }) => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img
          src={LogoWhite}
          alt={siteMetadata.title}
          style={{ display: `${scrollPosition <= 0 ? "block" : "none"}` }}
        />
        <img
          src={LogoBlack}
          alt={siteMetadata.title}
          style={{ display: `${scrollPosition > 0 ? "block" : "none"}` }}
        />
      </Link>
    </div>
  )
}

export default Logo
