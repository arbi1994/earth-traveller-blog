import React from "react"
import { graphql } from "gatsby"
// components
import Layout from "../../components/Layout"
import ArticleHero from "../../components/ArticleHero"

const ArticlePage = ({ data }) => {
  const { wpPost: post } = data
  console.log(post)

  return (
    <Layout>
      <ArticleHero data={post} />
      <main style={{minHeight: '100vh'}}></main>
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
  }
`
