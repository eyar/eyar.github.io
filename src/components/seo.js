/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={defaultTitle}
      link = {[
        { rel : 'canonical', href : 'https://eyar.github.io/web/'  }
      ]}
      meta={[
        {
          name: `description`,
          content: 'Eyar Gilad CV',
        },
        {
          property: `og:title`,
          content: 'Eyar Gilad CV',
        },
        {
          property: `og:url`,
          content: 'https://eyar.github.io/web/',
        },
        {
          property: `og:description`,
          content: 'Eyar Gilad CV',
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `Eyar Gilad CV`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: 'Eyar Gilad CV',
        },
        {
          name: `twitter:description`,
          content: 'Eyar Gilad CV',
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
