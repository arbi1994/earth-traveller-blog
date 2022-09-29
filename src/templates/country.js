import React from "react"
import { graphql } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
import * as socialsStyles from "../pages/styles.module.scss"
// components
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import PageIntroduction from "../components/PageIntroduction"
import PageContent from "../components/PageContent"
import Articles from "../components/Articles"

const Country = ({ data }) => {
  const { wpPage: pageData, allWpPost: articles } = data

  // secondary theme used in the MobileNav component
  const socialsTheme2 = {
    positionClass: `${socialsStyles.secondaryIconWrapper}`,
    color: `${socialsStyles.secondaryColor}`,
  }

  console.log(data)
  return (
    <Layout socialsTheme={socialsTheme2}>
      <PageHero data={pageData} />
      <div className={styles.wrapper}>
        <PageIntroduction data={pageData} />
        <PageContent>
          <Articles data={articles} />
        </PageContent>
      </div>
    </Layout>
  )
}

export const countryPageQuery = graphql`
  query MyQuery($slug: String!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          title
          link
          slug
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
    wpPage(slug: { eq: $slug }) {
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
  }
`

export default Country
