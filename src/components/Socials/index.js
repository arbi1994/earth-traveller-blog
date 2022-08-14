import React from "react"
// icons
import { AiOutlineInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
// icon context to provide inline styles
import { IconContext } from "react-icons"
// styles
import * as styles from "./styles.module.scss"

const Socials = ({ socials }) => {
  const { menuItems } = socials

  return (
    <IconContext.Provider
      value={{
        color: "white",
        size: "3em",
        title: "socials",
      }}
    >
      <ul className={styles.wrapper}>
        {menuItems.nodes.map(node => (
          <li key={node.id}>
            <a href={node.url} target="_blank" rel="noopener">
              {node.label === "Instagram" ? (
                <AiOutlineInstagram />
              ) : node.label === "Facebook" ? (
                <FaFacebookF />
              ) : (
                <FaTwitter />
              )}
            </a>
          </li>
        ))}
      </ul>
    </IconContext.Provider>
  )
}

export default Socials
