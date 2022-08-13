import React from 'react'
import * as styles from './styles.module.scss'
import { Link } from 'gatsby'
// logo
import Logo from '../../images/logo.svg'

const Navbar = ({ site, menu }) => {
  const { menuItems } = menu
  const { siteMetadata } = site
  
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarLeft}>
        {menuItems.nodes.slice(0, menuItems.nodes.length/2).map(({id, url, label}) => {
          return <li id={id}><Link to={url}>{label}</Link></li>
        })}
      </ul>
      <Link className={styles.logo} to="/">
        <img src={Logo} alt={siteMetadata.title} />
      </Link>
      <ul className={styles.navbarRight}>
        {menuItems.nodes.slice(menuItems.nodes.length/2).map(({id, url, label}) => {
          return <li id={id}><Link to={url}>{label}</Link></li>
        })}
      </ul>
    </nav>
  )
}

export default Navbar