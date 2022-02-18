import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Subscribe from "../components/subscribe"
import Hero from "../components/hero"
import Header from "../components/header"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <Seo title="Index" />
      {/* <Subscribe /> */}
      <Header />
      <Hero />
   
    {/* // <Layout location={location} title={siteTitle}>
    // </Layout> */}
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
