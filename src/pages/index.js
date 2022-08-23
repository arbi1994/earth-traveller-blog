import * as React from "react"
// global styles
import "../sass/index.scss"
// components
import Layout from "../components/layout"
import Hero from "../components/Hero"
import SectionLayout from "../components/SectionLayout"
import SectionSwiper from "../components/SectionSwiper"
import img from "../images/swiper-demo.jpg"
// import Seo from "../components/seo"

const IndexPage = () => {
  // theme used in the homepage only
  const socialsTheme1 = {
    positionClass: "primary-icon-wrapper",
    color: "primary-color",
  }

  // secondary theme used in the MobileNav component
  const socialsTheme2 = {
    positionClass: "secondary-icon-wrapper",
    color: "secondary-color",
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

  const dummyData = [
    {
      title: "The best San Francisco lookouts",
      date: "26/07/2022",
      location: "United States",
      image: `${img}`
    },
    {
      title: "The best San Francisco lookouts",
      date: "26/07/2022",
      location: "United States",
      image: `${img}`
    },
    {
      title: "The best San Francisco lookouts",
      date: "26/07/2022",
      location: "United States",
      image: `${img}`
    },
    {
      image: `${img}`
    },
    {
      image: `${img}`
    },
    {
      image: `${img}`
    },
  ]

  return (
    <Layout socialsTheme={socialsTheme2}>
      {/* <Seo title="Home" /> */}
      <Hero socialsTheme={socialsTheme1} />
      <SectionLayout props={firstSection}>
        <SectionSwiper data={dummyData} />
      </SectionLayout>
      <SectionLayout props={secondSection} />
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
