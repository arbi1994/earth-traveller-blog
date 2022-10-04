import React from "react"
import { graphql } from "gatsby"
// styles
import * as styles from "../../pages/styles.module.scss"
// components
import Layout from "../../components/Layout"
import ArticleHero from "../../components/ArticleHero"
import ArticleContent from "../../components/ArticleContent"
import Commenting from '../../components/Commenting'

const ArticlePage = ({ data }) => {
  const { wpPost: post, wpPage: about } = data

  // secondary theme used in the MobileNav component
  const socialsTheme2 = {
    positionClass: `${styles.secondaryIconWrapper}`,
    color: `${styles.secondaryColor}`,
  }

  return (
    <Layout socialsTheme={socialsTheme2}>
      <ArticleHero data={post} />
      <ArticleContent data={post} aboutData={about} />
      <Commenting />
    </Layout>
  )
}

export default ArticlePage

export const articlePageQuery = graphql`
  query MyArticleQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      title
      author {
        node {
          firstName
          lastName
          avatar {
            url
          }
        }
      }
      date(formatString: "DD MMM YYYY")
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          gatsbyImage(
            width: 1600
            quality: 100
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
      }
      content
    }
    wpPage(slug: { eq: "about" }) {
      id
      avatarImage {
        avatarImage {
          gatsbyImage(
            width: 300
            quality: 100
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
      }
      authorIntroduction {
        content
      }
    }
  }
`
