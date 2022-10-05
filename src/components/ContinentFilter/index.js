import React, { useState, useEffect } from "react"
// styles
import * as styles from "./styles.module.scss"
// hooks
import { useTagsQuery } from "../../hooks/useTagsQuery"
import useWindowSize from "../../hooks/useWindowSize"

const ContinentFilter = ({ setContinentSelected, scrollPosition }) => {
  const [selected, setSelected] = useState("show all")
  const [scrollYOffset, setScrollYOffset] = useState()
  const [navbarHeight, setNavbarHeight] = useState(0)
  const [width] = useWindowSize()
  // tags data
  const { allWpTag: data } = useTagsQuery()
  const { edges: tags } = data

  // Save data to sessionStorage
  useEffect(() => {
    sessionStorage.setItem("continent-selected", selected)
  }, [selected])

  // Get saved data from sessionStorage
  useEffect(() => {
    let data = sessionStorage.getItem("continent-selected")
    setContinentSelected(data)
  }, [selected])

  const handleChange = e => {
    setSelected(e.target.value)
  }

  const handleClick = e => {
    if (e.target) {
      window.scrollTo({ top: scrollYOffset, left: 0, behavior: "smooth" })
    }
  }

  useEffect(() => {
    const navbar = document.getElementById("header")
    const pageHero = document.getElementById("page-hero")

    if (navbar !== null) {
      navbar.addEventListener("transitionend", () => {
        setNavbarHeight(navbar.getBoundingClientRect().height)
        setScrollYOffset(
          pageHero.getBoundingClientRect().height -
            navbar.getBoundingClientRect().height
        )
      })
    }
  }, [width, scrollPosition])

  console.log("navbarHeight = ", navbarHeight)
  console.log("scrollYOffset = ", scrollYOffset)

  return (
    <div className={styles.filter}>
      <div className={styles.filterWrapper}>
        <input
          type="radio"
          id="show all"
          name="continent"
          value="show all"
          checked={selected === "show all"}
          onChange={handleChange}
          onClick={handleClick}
        />
        <label
          htmlFor="show all"
          className={`
              ${styles.filterButton}
              ${selected === "show all" ? styles.active : ""}
            `}
        >
          Show all
        </label>
        {tags?.map(tag => (
          <div key={tag?.node?.id}>
            <input
              type="radio"
              id={tag?.node?.name}
              name="continent"
              value={tag?.node?.name}
              checked={selected === tag?.node?.name}
              onChange={handleChange}
              onClick={handleClick}
            />
            <label
              htmlFor={tag?.node?.name}
              className={`
              ${styles.filterButton}
              ${selected === tag?.node?.name ? styles.active : ""}
            `}
            >
              {tag?.node?.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContinentFilter
