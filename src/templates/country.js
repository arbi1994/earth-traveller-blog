import React from "react"
import { graphql } from "gatsby"

const Country = ({ data }) => {
  console.log(data)
  return <div>Country</div>
}

export const countryPageQuery = graphql`
  query MyQuery($slug: String!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          title
          link
        }
      }
    }
  }
`

export default Country
