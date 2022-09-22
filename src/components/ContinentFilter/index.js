import React, { useState, useEffect } from "react"
// styles
import * as styles from "./styles.module.scss"
// hooks
import { useTagsQuery } from "../../hooks/useTagsQuery"

const ContinentFilter = ({ setContinentSelected }) => {
  const [selected, setSelected] = useState("show all")
  // tags data
  const { allWpTag: data } = useTagsQuery()
  const { edges: tags } = data

  useEffect(() => {
    // Save data to sessionStorage
    sessionStorage.setItem("continent-selected", selected)
  }, [selected])

  useEffect(() => {
    // Get saved data from sessionStorage
    let data = sessionStorage.getItem("continent-selected")
    setContinentSelected(data)
  }, [selected])

  const handleChange = e => {
    setSelected(e.target.value)
  }

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
