import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// logo images
import LogoWhite from "../../images/logo.svg"
import LogoBlack from "../../images/logo_black.svg"

const Logo = ({ scrollPosition, siteMetadata, width }) => {
  const logoRef = useRef()
  // small desktop breakpoint
  const smDesktopWidth = 1024

  useEffect(() => {
    if (width[0] <= smDesktopWidth) {
      if (scrollPosition > 0) logoRef.current.style.width = "6em"
      if (scrollPosition <= 0) logoRef.current.style.width = "8em"
    }else{
      if (scrollPosition > 0) logoRef.current.style.width = "8em"
      if (scrollPosition <= 0) logoRef.current.style.width = "10em"
    }
  }, [scrollPosition, width])

  const handleLogoDisplayed = () => {
    
    if(scrollPosition <= 0) return LogoWhite
    if(scrollPosition > 0) return LogoBlack
  }

  return (
    <div className={styles.logo}>
      <Link to="/">
        <img
          ref={logoRef}
          src={handleLogoDisplayed()}
          alt={siteMetadata.title}
        />
      </Link>
    </div>
  )
}

export default Logo
