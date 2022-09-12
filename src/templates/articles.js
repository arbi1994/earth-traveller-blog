import React from "react"
import { graphql } from "gatsby"
// import Stack from "@mui/material/Stack"
// import Pagination from "@mui/material/Pagination"
// styles
import * as styles from "./styles.module.scss"
// components
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import PageIntroduction from "../components/PageIntroduction"
import PageContent from "../components/PageContent"
import Articles from "../components/Articles"
import Pagination from "../components/Pagination"

const ArticleList = ({ data, pageContext: { numPages, currentPage } }) => {
  const { wpPage: pageData, allWpPost: articles } = data

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
        <PageContent>
          <Articles data={articles} />
          <Pagination totalPages={numPages} currentPage={currentPage} />
        </PageContent>
      </div>
    </Layout>
  )
}

export const articlesPageQuery = graphql`
  query myBlogPosts($limit: Int!, $skip: Int!) {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "Articles" } } } }
      }
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          link
          date(formatString: "MMM DD, YYYY")
          featuredImage {
            node {
              gatsbyImage(
                width: 150
                fit: COVER
                quality: 100
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
    wpPage(id: { eq: "cG9zdDoxOQ==" }) {
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
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
    }
  }
`

export default ArticleList
