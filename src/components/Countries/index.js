import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
//styles
import * as styles from "./styles.module.scss"
// component
import Card from "../Card"

const Countries = ({ data, continentSelected }) => {
  const [countries, setCountries] = useState()

  useEffect(() => {
    setCountries(
      data?.edges?.filter(edge => {
        return edge?.node?.continent?.name === continentSelected
      })
    )
  }, [continentSelected])

  return (
    <div className={styles.wrapper}>
      {continentSelected === "show all"
        ? data?.edges?.map(country => (
            <Link key={country?.node?.id} to={country?.node?.uri}>
              <Card data={country?.node} pathname={window.location.pathname} />
            </Link>
          ))
        : countries?.map(country => (
            <Link key={country?.node?.id} to={country?.node?.uri}>
              <Card data={country?.node} pathname={window.location.pathname} />
            </Link>
          ))}
    </div>
  )
}

export default Countries
