import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
// hooks
import useSiteMetadata from "../hooks/useSiteMetadata"

const SEO = ({ title, description, image, slug, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}/${slug || ``}`,
  }

  return (
    <Helmet
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={`${seo.url}`} />
      {children}
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string,
  children: PropTypes.node,
}

export default SEO
