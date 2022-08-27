import { useStaticQuery, graphql } from "gatsby"

export const useCountriesQuery = () => {
  const data = useStaticQuery(graphql`
    query MyCountriesQuery {
      allWpPage(
        filter: { wpParent: { node: { uri: { eq: "/countries/" } } } }
        limit: 3
      ) {
        edges {
          node {
            id
            title
            featuredImage {
              node {
                gatsbyImage(
                  width: 350
                  layout: CONSTRAINED
                  fit: COVER
                  aspectRatio: 1
                  cropFocus: CENTER
                  placeholder: BLURRED
                )
              }
            }
            uri
          }
        }
      }
    }
  `)

  return data
}
