import React, { useState } from "react"
// icons
import { AiOutlineInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
// icon context to provide inline styles
import { IconContext } from "react-icons"
// styles
import * as styles from "./styles.module.scss"
import "./iconStyle.scss"

const Socials = ({ socials }) => {
  const { menuItems } = socials

  const displayedIcons = label => {
    if (label === "Instagram") return <AiOutlineInstagram className="icon" />
    if (label === "Facebook") return <FaFacebookF className="icon" />
    if (label === "Twitter") return <FaTwitter className="icon" />
  }

  return (
    <IconContext.Provider
      value={{
        size: "3em",
        title: "socials",
      }}
    >
      <ul className={styles.wrapper}>
        {menuItems.nodes.map(node => (
          <li key={node.id}>
            <a href={node.url} target="_blank" rel="noopener">
              {displayedIcons(node.label)}
            </a>
          </li>
        ))}
      </ul>
    </IconContext.Provider>
  )
}

export default Socials
