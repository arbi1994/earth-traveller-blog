import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
      wpMenu(name: { eq: "Main Menu" }) {
        id
        menuItems {
          nodes {
            id
            url
            label
          }
        }
      }
    }
  `)

  return data
}
