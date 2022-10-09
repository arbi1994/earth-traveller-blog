import React from "react"
import { graphql } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
// components
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import PageIntroduction from "../components/PageIntroduction"
import PageContent from "../components/PageContent"
import Gallery from "../components/Gallery"
import SEO from "../components/seo"

const GalleryPage = ({ data }) => {
  const { wpPage: pageData, allWpPost: allPhotos } = data
  const { edges: photos } = allPhotos
  console.log(photos)
  // secondary theme used in the MobileNav component
  const socialsTheme2 = {
    positionClass: `${styles.secondaryIconWrapper}`,
    color: `${styles.secondaryColor}`,
  }

  return (
    <Layout socialsTheme={socialsTheme2}>
      <SEO
        title={pageData.title}
        description="A gallery page to illustrate all the photos that best represent each country visited"
        slug={pageData.slug}
      />
      <PageHero data={pageData} />
      <div className={styles.wrapper}>
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
      slug
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
    allWpMediaItem(filter: { parentId: { eq: "cG9zdDo2Ng==" } }) {
      edges {
        node {
          id
          title
          link
          mediaItemUrl
          gatsbyImage(width: 320, quality: 100, fit: COVER, layout: FULL_WIDTH)
        }
      }
    }
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "Photos" } } } }
      }
    ) {
      edges {
        node {
          id
          featuredImage {
            node {
              gatsbyImage(
                width: 320
                quality: 100
                fit: COVER
                layout: FULL_WIDTH
              )
              mediaItemUrl
              filename
            }
          }
        }
      }
    }
  }
`

export default GalleryPage
