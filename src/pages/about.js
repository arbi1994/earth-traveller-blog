import React from "react"
import { graphql } from "gatsby"
// styles
import * as styles from './styles.module.scss'
// components
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import PageIntroduction from "../components/PageIntroduction"
import PageContent from "../components/PageContent"

const AboutPage = ({ data }) => {
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
        <PageIntroduction data={pageData} />
        <PageContent data={pageData} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    wpPage(title: { eq: "About" }) {
      id
      title
      avatarImage {
        avatarImage {
          id
          gatsbyImage(
            width: 300
            quality: 100
            layout: FULL_WIDTH
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
    }
  }
`

export default AboutPage
