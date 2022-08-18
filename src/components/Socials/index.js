import React from "react"
// hooks
import { useSocialsQuery } from "../../hooks/useSocialsQuery"
// icons
import { AiOutlineInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
// icon context to provide inline styles
import { IconContext } from "react-icons"

const Socials = ({ socialsTheme }) => {
  const { wpMenu } = useSocialsQuery()

  const displayedIcons = label => {
    if (label === "Instagram") return <AiOutlineInstagram className={socialsTheme.color} />
    if (label === "Facebook") return <FaFacebookF className={socialsTheme.color} />
    if (label === "Twitter") return <FaTwitter className={socialsTheme.color} />
  }

  return (
    <IconContext.Provider
      value={{
        size: "3rem",
        title: "socials",
      }}
    >
      <ul className={socialsTheme.positionClass}>
        {wpMenu.menuItems.nodes.map(node => (
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
