import React from "react"
import { graphql } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// components
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import PageIntroduction from "../components/PageIntroduction"
import PageContent from "../components/PageContent"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  const { wpPage: pageData } = data

  // secondary theme used in the MobileNav component
  const socialsTheme2 = {
    positionClass: `${styles.secondaryIconWrapper}`,
    color: `${styles.secondaryColor}`,
  }

  return (
    <Layout socialsTheme={socialsTheme2}>
      <SEO
        title={pageData?.title}
        description={pageData?.meta_description?.metaDescription}
        image={pageData?.featuredImage?.node?.mediaItemUrl}
        slug={pageData?.slug}
      />
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
      slug
      meta_description {
        metaDescription
      }
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
          mediaItemUrl
        }
      }
    }
  }
`

export default AboutPage
