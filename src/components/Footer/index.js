import React from "react"
import { Link } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// logo
import LogoWhite from "../../images/logo-white.svg"
// get year
import { getCurrentYear } from "../../helpers/getYear"
// icons
import { FaHeart } from "react-icons/fa"
// hooks
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { useSocialsQuery } from "../../hooks/useSocialsQuery"

const Footer = () => {
  const { wpMenu: menu } = useMenuQuery()
  const { wpMenu: socials } = useSocialsQuery()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.navigation}>
          <div className={styles.navigationTitle}>
            <h5>Menu</h5>
          </div>
          <hr style={styles.navigationDivider} />
          <ul className={styles.navigationContainer}>
            {menu?.menuItems?.nodes?.map(({ id, url, label }) => (
              <li key={id}>
                <Link to={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navigationTitle}>
            <h5>Connect with me on</h5>
          </div>
          <hr />
          <ul className={styles.navigationContainer}>
            {socials?.menuItems?.nodes?.map(({ id, url, label }) => (
              <li key={id}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footerLogo}>
          <img src={LogoWhite} alt="" />
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <h6>
            &copy; {getCurrentYear()} Earth Traveller. All rights reserved
          </h6>
        </div>
        <div className={styles.credits}>
          <h6>
            Made with &nbsp;
            <span>
              <FaHeart color="#F24E1E" />
            </span>
            &nbsp; by &nbsp;
            <a
              href="https://arbershyti.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arber Shyti
            </a>
          </h6>
        </div>
      </div>
    </footer>
  )
}

export default Footer
