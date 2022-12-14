import React from "react"
import parse from "html-react-parser"
// styles
import * as styles from "./styles.module.scss"

const PageContent = ({ data, children }) => {
  return (
    <main id="main-container" className={styles.main}>
      <div className={styles.mainWrapper}>
        {data?.title === "About" ? parse(`${data?.content}`) : null}
        {data?.title === "Gallery" ? parse(`${data?.content}`) : null}
        {children}
      </div>
    </main>
  )
}

export default PageContent
