import React, { useState } from "react"
import { graphql, Link } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// components
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import PageContent from "../components/PageContent"
import Countries from "../components/Countries"
import ContinentFilter from "../components/ContinentFilter"

const CountriesPage = ({ data }) => {
  const [continentSelected, setContinentSelected] = useState()

  const { wpPage: pageData, allWpPage: countriesData } = data

  // secondary theme used in the MobileNav component
  const socialsTheme2 = {
    positionClass: `${styles.secondaryIconWrapper}`,
    color: `${styles.secondaryColor}`,
  }

  return (
    <Layout socialsTheme={socialsTheme2}>
      <PageHero data={pageData} />
      <div className={styles.wrapper}>
        <PageContent>
          <ContinentFilter setContinentSelected={setContinentSelected} />
          <hr />
          <Countries data={countriesData} continentSelected={continentSelected} />
        </PageContent>
      </div>
    </Layout>
  )
}

export const countriesPageQuery = graphql`
  query {
    wpPage(id: { eq: "cG9zdDoyMA==" }) {
      id
      title
      content
      status
      featuredImage {
        node {
          gatsbyImage(
            width: 1600
            quality: 100
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
    }
    allWpPage(filter: { wpParent: { node: { id: { eq: "cG9zdDoyMA==" } } } }) {
      edges {
        node {
          id
          title
          link
          slug
          continent {
            name
          }
          featuredImage {
            node {
              gatsbyImage(
                width: 150
                fit: COVER
                quality: 100
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`

export default CountriesPage
