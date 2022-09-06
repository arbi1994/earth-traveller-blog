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
          }
        }
      }
    }
  `)

  // check for errors
  if (result.errors) {
    reporter.panicOnBuild("Oh Sh**!", result.errors)
    return
  }

  const { wp, allWpCategory } = result.data

  // create pages for each category
  allWpCategory.edges.forEach(category => {
    const postsPerPage = wp.readingSettings.postsPerPage
    const numberOfPosts = category.node.count
    const numPages = Math.ceil(numberOfPosts / postsPerPage)

    if (numberOfPosts > 0) {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/${category.node.slug}` : `/${category.node.slug}/${i + 1}`,
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
