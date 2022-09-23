import React from "react"
import { Link } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// components
import Card from "../Card"

const Articles = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data.edges.length <= 0 ? (
        <h3 className={styles.wrapperNoArticlesMessage}>
          Articles coming soon ...😉
        </h3>
      ) : null}
      {data.edges.map(data => (
        <Link key={data.node.id} to={`/articles/${data.node.slug}`}>
          <Card data={data.node} />
        </Link>
      ))}
    </div>
  )
}

export default Articles
