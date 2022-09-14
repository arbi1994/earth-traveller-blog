/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  const currentPosition = getSavedScrollPosition(location)
  const queriedPosition = getSavedScrollPosition({ pathname: `/articles/` })

  window.scrollTo(...(currentPosition || [0, 0]))

  return false
}