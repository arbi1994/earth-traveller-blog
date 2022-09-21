import React, { useRef } from "react"
import parse from "html-react-parser"
// styles
import * as styles from "./styles.module.scss"

const PageContent = ({ data, children, currentPage }) => {
  const ref = useRef()

  return (
    <main id="main-container" ref={ref} className={styles.main}>
      <div className={styles.mainWrapper}>
        {data?.title === "About" ? parse(`${data?.content}`) : null}
        {children}
      </div>
    </main>
  )
}

export default PageContent
