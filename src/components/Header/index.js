import * as React from "react"
import * as styles from './styles.module.scss'
// components
import Navbar from './Navbar'
import Socials from './Socials'
// hooks
import { useMenuQuery } from '../../hooks/useMenuQuery'

// need to declare the meta site title as a prop

const Header = () => {
  const {site, wpMenu} = useMenuQuery()

  return(
    <header className={styles.header}>
      <Navbar site={site} menu={wpMenu} />
    </header>
  )
}

export default Header
