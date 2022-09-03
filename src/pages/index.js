import * as React from "react"
// global styles
import "../sass/index.scss"
import * as styles from "./styles.module.scss"
// components
import Layout from "../components/layout"
import Hero from "../components/Hero"
import SectionLayout from "../components/SectionLayout"
import LatestArticles from "../components/LatestArticles"
import LatestCountries from "../components/LatestCountries"
import NewsletterSection from "../components/NewsletterSection"
// import Seo from "../components/seo"

const IndexPage = () => {
  // theme used in the homepage only
  const socialsTheme1 = {
    positionClass: `${styles.primaryIconWrapper}`,
    color: `${styles.primaryColor}`,
  }
  // secondary theme used in the MobileNav component
  const socialsTheme2 = {
    positionClass: `${styles.secondaryIconWrapper}`,
    color: `${styles.secondaryColor}`,
  }

  //first section properties
  const firstSection = {
    title: "latest articles",
    link: "/articles",
    color: "black",
    backgroundColor: "#EAEAEA",
  }
  //second section properties
  const secondSection = {
    title: "latest countries visited",
    link: "/countries",
    color: "white",
    backgroundColor: "#0E0E0E",
  }

  return (
    <Layout socialsTheme={socialsTheme2}>
      {/* <Seo title="Home" /> */}
      <Hero socialsTheme={socialsTheme1} />
      <SectionLayout props={firstSection}>
        <LatestArticles />
      </SectionLayout>
      <SectionLayout props={secondSection}>
        <LatestCountries />
      </SectionLayout>
      <NewsletterSection />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage
