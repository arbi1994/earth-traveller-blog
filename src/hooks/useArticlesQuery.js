import { useStaticQuery, graphql } from "gatsby"

export const useArticlesQuery = () => {
  const data = useStaticQuery(
    graphql`
      query MyArticlesQuery {
        allWpPost {
          edges {
            node {
              id
              title
              tags {
                nodes {
                  id
                  name
                }
              }
              date(formatString: "DD MMM yyyy")
              excerpt
              featuredImage {
                node {
                  gatsbyImage(fit: COVER, width: 320, layout: FULL_WIDTH, aspectRatio: 0.8)
                }
              }
              uri
            }
          }
        }
      }
    `
  )
  return data
}
