import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Subscribe from "../components/Subscribe"
import Hero from "../components/Hero"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <Seo title="Index" />
      <Subscribe />
      {/* <Hero /> */}
    </>
    // <Layout location={location} title={siteTitle}>
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
