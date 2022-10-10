import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
      favicon: file(name: { eq: "favicon" }) {
        publicURL
      }
    }
  `)

  return data
}

export default useSiteMetadata
