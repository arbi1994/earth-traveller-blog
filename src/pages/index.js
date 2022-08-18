import * as React from "react"
// global styles
import "../sass/index.scss"
// components
import Layout from "../components/layout"
import Hero from "../components/Hero"
// import Seo from "../components/seo"

const IndexPage = () => {
  // theme used in the homepage only
  const socialsTheme1 = {
    positionClass: "primary-icon-wrapper",
    color: "primary-color",
  }

  // this theme need to be used in the other pages
  const socialsTheme2 = {
    positionClass: "secondary-icon-wrapper",
    color: "secondary-color",
  }

  return (
    <Layout socialsTheme={socialsTheme2}>
      {/* <Seo title="Home" /> */}
      <Hero socialsTheme={socialsTheme1} />
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
