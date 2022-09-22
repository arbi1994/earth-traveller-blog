import { useStaticQuery, graphql } from "gatsby"

export const useTagsQuery = () => {
  const data = useStaticQuery(graphql`
    query MyTagsQuery {
      allWpTag {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  return data
}
