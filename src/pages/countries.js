import React from "react"
import { graphql, Link } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// components
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import PageIntroduction from "../components/PageIntroduction"
import PageContent from "../components/PageContent"

const CountriesPage = ({ data }) => {
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
        <PageIntroduction data={pageData} />
        <PageContent>
          <div>
            {countriesData?.edges?.map(country => (
              <div key={country?.node?.id}>
                <Link to={country?.node?.link}>{country?.node?.title}</Link>
              </div>
            ))}
          </div>
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
          featuredImage {
            node {
              gatsbyImage(
                width: 1600
                layout: FIXED
                quality: 100
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

