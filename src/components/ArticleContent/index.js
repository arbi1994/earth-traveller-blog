import React from "react"
import parse from "html-react-parser"
// styles
import * as styles from "./styles.module.scss"
// component
import ArticleSidebar from "../ArticleSidebar"

const ArticleContent = ({ data, aboutData }) => {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.mainContent}>{parse(`${data?.content}`)}</div>
      <ArticleSidebar data={data} aboutData={aboutData} />
    </main>
  )
}

export default ArticleContent
