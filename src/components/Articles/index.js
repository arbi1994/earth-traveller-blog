import React from "react"
import { Link } from 'gatsby'
// styles
import * as styles from "./styles.module.scss"
// components
import Card from '../Card'

const Articles = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data.edges.map(data => (
        <Link key={data.node.id} to={data.node.link}>
          <Card data={data.node} />
        </Link>
      ))}
    </div>
  )
}

export default Articles
