import React from "react"
import Content from "./Content"
// styles
import * as styles from "./styles.module.scss"

const Pagination = ({ totalPages, currentPage }) => {
  return (
    <div className={styles.pagination}>
      <Content totalPages={totalPages} currentPage={currentPage} />
    </div>
  )
}

export default Pagination
