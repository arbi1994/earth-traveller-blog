import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
// hooks
import useSiteMetadata from "../hooks/useSiteMetadata"

const SEO = ({ title, description, image, slug, children }) => {
  const { site, favicon } = useSiteMetadata()

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = site.siteMetadata

  const { publicURL } = favicon

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${slug || ``}`,
  }

  return (
    <Helmet
      defer={false}
      htmlAttributes={{ lang: `en` }}
      titleTemplate={`%s`}
      defaultTitle={seo.title}
    >
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      <link rel="shortcut icon" href={publicURL} />
      <meta name="twitter:site" content="@earth_traveller" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:image" content={image} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={image} />
      <meta name="og:type" content={slug === '' ? 'website' : 'article'} />
      <meta name="og:url" content={seo.url} />
      <meta name="og:site_name" content={seo.title} />
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
