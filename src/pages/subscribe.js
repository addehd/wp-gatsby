import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Subscribe from "../components/subscribe"
import Header from "../components/header"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <Header />
      <Seo title="Subscribe to BJJ token" />
      <h1 className="fixed z-20">...-{siteTitle}</h1>
      <Subscribe />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
