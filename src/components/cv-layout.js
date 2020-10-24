import React from 'react'
import Helmet from 'react-helmet'
import './styles.module.scss'

function CVLayout({ children, pageContext }) {
  const { title } = pageContext.frontmatter
  console.log(title)
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        {children}
      </article>
    </>
  )
}

export default CVLayout