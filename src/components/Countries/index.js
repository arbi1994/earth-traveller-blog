import React from "react"
import { Link } from "gatsby"
//styles
import * as styles from "./styles.module.scss"
// component
import Card from "../Card"

const Countries = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data?.edges?.map(country => (
        <li key={country?.node?.id}>
          <Link to={country?.node?.link}>
            <Card data={country?.node} pathname={window.location.pathname} />
          </Link>
        </li>
      ))}
    </div>
  )
}

export default Countries
