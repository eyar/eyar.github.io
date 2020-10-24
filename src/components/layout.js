import React from 'react'
import './styles.module.scss'
import SEO from "./seo"

function CVLayout({ children, pageContext }) {
  return (
    <>
        <SEO/>
        <article>
            {children}
        </article>
    </>
  )
}

export default CVLayout