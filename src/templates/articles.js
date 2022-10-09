import React from "react"
import { graphql } from "gatsby"
// styles
import * as styles from "./styles.module.scss"
import * as socialsStyles from "../pages/styles.module.scss"
// components
import Layout from "../components/Layout"
import PageHero from "../components/PageHero"
import PageIntroduction from "../components/PageIntroduction"
import PageContent from "../components/PageContent"
import Articles from "../components/Articles"
import Pagination from "../components/Pagination"
import SEO from "../components/seo"

const ArticleList = ({ data, pageContext: { numPages, currentPage } }) => {
  const { wpPage: pageData, allWpPost: articles } = data

  // secondary theme used in the MobileNav component
  const socialsTheme2 = {
    positionClass: `${socialsStyles.secondaryIconWrapper}`,
    color: `${socialsStyles.secondaryColor}`,
  }

  return (
    <Layout socialsTheme={socialsTheme2}>
      <SEO
        title={pageData.title}
        description="Articles page"
        slug={pageData.slug}
      />
      <PageHero data={pageData} currentPage={currentPage} />
      <div className={styles.wrapper}>
        {currentPage > 1 ? null : <PageIntroduction data={pageData} />}
        <PageContent currentPage={currentPage}>
          <Articles data={articles} currentPage={currentPage} />
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
          slug
          date(formatString: "MMM DD, YYYY")
          featuredImage {
            node {
              gatsbyImage(
                width: 150
                fit: COVER
                quality: 100
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
    wpPage(id: { eq: "cG9zdDoxMg==" }) {
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
