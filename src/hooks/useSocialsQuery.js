import { useStaticQuery, graphql } from 'gatsby'

export const useSocialsQuery = () => {
  const data = useStaticQuery(graphql`
    query SocialsQuery {
      wpMenu(name: {eq: "Socials"}) {
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