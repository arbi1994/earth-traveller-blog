import React, { useState, useEffect, useRef } from "react"
import parse from "html-react-parser"
// styles
import * as styles from "./styles.module.scss"
// hooks
import useScrollPosition from "../../hooks/useScrollPosition"

const PageContent = ({ data, children, currentPage }) => {
  const ref = useRef()

  return (
    <main ref={ref} className={styles.main}>
      <div className={styles.mainWrapper}>
        {data?.title === "About" ? parse(`${data?.content}`) : null}
        {children}
      </div>
    </main>
  )
}

export default PageContent
