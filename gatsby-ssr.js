/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// exports.onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: `en` })
// }

const React = require("react")
const { Helmet } = require("react-helmet")

exports.onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes },
  pluginOptions
) => {
  const helmet = Helmet.renderStatic()
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ])
}

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()

  headComponents.sort((a, b) => {
    if (a.type === b.type || (a.type !== "style" && b.type !== "style")) {
      return 0
    }

    if (a.type === "style") {
      return 1
    } else if (b.type === "style") {
      return -1
    }

    return 0
  })

  replaceHeadComponents(headComponents)
}
