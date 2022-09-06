import React from "react"
import { Link } from "gatsby"
// styles
import * as styles from "./styles.module.scss"

const Pagination = ({ page, totalPages }) => {
  const isFirst = page === 1
  const isLast = page === totalPages
  const prevPage = page - 1 === 1 ? "/articles" : (page - 1).toString()
  const nextPage = (page + 1).toString()

  return (
    <div className={styles.pagination}>
      {!isFirst ? (
        <Link to={prevPage} rel="prev">
          Previous Page
        </Link>
      ) : null}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page
        </Link>
      )}
    </div>
  )
}

export default Pagination
