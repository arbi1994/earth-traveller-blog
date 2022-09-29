import React from "react"
import { graphql } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// components
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import PageIntroduction from "../components/PageIntroduction"
import PageContent from "../components/PageContent"
import Gallery from '../components/Gallery'

const GalleryPage = ({ data }) => {
  const { wpPage: pageData, allWpMediaItem: mediaData } = data
  const { edges: photos } = mediaData
  console.log(photos)
  // secondary theme used in the MobileNav component
  const socialsTheme2 = {
    positionClass: `${styles.secondaryIconWrapper}`,
    color: `${styles.secondaryColor}`,
  }

  return (
    <Layout socialsTheme={socialsTheme2}>
      <PageHero data={pageData} />
      <div className={styles.wrapper}>
        {/* <PageIntroduction data={pageData} /> */}
        <PageContent>
          <Gallery data={photos} />
        </PageContent>
      </div>
    </Layout>
  )
}

export const galleryPageQuery = graphql`
  query {
    wpPage(title: { eq: "Gallery" }) {
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
    allWpMediaItem(
      filter: { parentId: { eq: "cG9zdDoyMQ==" }, title: { ne: "hero" } }
    ) {
      edges {
        node {
          id
          title
          gatsbyImage(width: 320, quality: 100, fit: COVER, layout: FULL_WIDTH)
        }
      }
    }
  }
`

export default GalleryPage
