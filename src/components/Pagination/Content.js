import React from "react"
import { Link } from "gatsby"
// material ui components
import Pagination from "@mui/material/Pagination"
import PaginationItem from "@mui/material/PaginationItem"

const Content = ({ totalPages, currentPage }) => {
  return (
    <Pagination
      page={currentPage}
      count={totalPages}
      size="large" 
      renderItem={item => (
        <PaginationItem
          component={Link}
          to={`/articles/${item.page === 1 ? "" : `${item.page}`}`}
          {...item}
        />
      )}
    />
  )
}

export default Content
