import * as React from "react"
// global styles
import "../sass/index.scss"
// components
import Layout from "../components/layout"
import Hero from '../components/Hero'
// import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <Seo title="Home" /> */}
    <Hero />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage
