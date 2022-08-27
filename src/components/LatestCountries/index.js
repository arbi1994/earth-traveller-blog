import React from "react"
// styles
import * as styles from "./styles.module.scss"
// hooks
import { useCountriesQuery } from "../../hooks/useCountriesQuery"
// components
import Card from "./Card"

const LatestCountries = () => {
  const data = useCountriesQuery()
  const { edges: countries } = data.allWpPage

  return (
    <div className={styles.wrapper}>
      {countries.map(({ node }) => (
        <Card props={node} />
      ))}
    </div>
  )
}

export default LatestCountries
