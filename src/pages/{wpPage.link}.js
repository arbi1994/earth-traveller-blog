import React from "react"
import { graphql } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// components
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import PageContent from "../components/PageContent"

const PageTemplate = ({ data }) => {
  const { wpPage: pageData } = data

  // secondary theme used in the MobileNav component
  const socialsTheme2 = {
    positionClass: `${styles.secondaryIconWrapper}`,
    color: `${styles.secondaryColor}`,
  }

  return (
    <Layout socialsTheme={socialsTheme2}>
      <PageHero data={pageData} />
      <div className={styles.wrapper}>
        <PageContent data={pageData} />
      </div>
    </Layout>
  )
}

// page query

export const pageQuery = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      avatarImage {
        avatarImage {
          id
          gatsbyImage(
            width: 300
            quality: 100
            layout: FIXED
            placeholder: BLURRED
          )
        }
      }
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
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
    }
  }
`

export default PageTemplate
