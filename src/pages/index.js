import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"


const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Hero />
    // <Layout location={location} title={siteTitle}>
    //   <Seo title="Index" />
    //   <h1>Index</h1>
    //   <p>Homde page</p>
    //   <Hero />
    // </Layout>
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
