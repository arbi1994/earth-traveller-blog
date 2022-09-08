// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

// Create blog post list pages
// const postsPerPage = 10;
// const numPages = Math.ceil(posts.length / postsPerPage);

// Array.from({ length: numPages}).forEach((_, i) => {
//   createPage({
//     path: i === 0 ? "/" : `/${i + 1}`,
//     component: path.resolve("./src/templates/article-list.js"),
//     context: {
//       limit: postsPerPage,
//       skip: i * postsPerPage,
//       numPages,
//       currentPage: i + 1,
//     }
//   })
// })

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const articlesTemplate = path.resolve("./src/templates/articles.js")
  const countryTemplate = path.resolve("./src/templates/country.js")

  const result = await graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            count
            uri
            slug
            wpParent {
              node {
                id
                name
              }
            }
            wpChildren {
              nodes {
                id
                link
                slug
                count
              }
            }
          }
        }
      }
      allWpPage(filter: { wpParent: { node: { slug: { eq: "countries" } } } }) {
        edges {
          node {
            id
            title
            link
            slug
            featuredImage {
              node {
                gatsbyImage(
                  width: 1600
                  layout: FIXED
                  quality: 100
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `)

  // category.node.wpChildren.nodes.name === "Countries"

  // check for errors
  if (result.errors) {
    reporter.panicOnBuild("Oh Sh**!", result.errors)
    return
  }

  const { wp, allWpCategory, allWpPage } = result.data

  // create pages for each country
  allWpPage.edges.forEach(page => {
    const slug = page.node.slug
    const link = page.node.link

    actions.createPage({
      path: link,
      component: require.resolve(`./src/templates/country.js`),
      context: { slug: slug },
    })
  })

  // create pages for each category
  allWpCategory.edges.forEach(category => {
    const postsPerPage = wp.readingSettings.postsPerPage
    const numberOfPosts = category.node.count
    const numPages = Math.ceil(numberOfPosts / postsPerPage)

    if (numberOfPosts > 0 && category.node.wpParent === null) {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path:
            i === 0
              ? `/${category.node.slug}`
              : `/${category.node.slug}/${i + 1}`,
          component: articlesTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })
    }
  })
}
