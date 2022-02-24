import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Subscribe from "../components/subscribe"
import Hero from "../components/hero"
import Header from "../components/header"
import Message from "../components/message"
import Test from "../components/test"
import NinjaTurtle from "../components/ninjaturtle"
import Grid from "../components/grid"

const IndexPage = () => {
  // const siteTitle = data.site.siteMetadata.title
  return (
    <>
      <Seo title="BJJ Token" />
      <Header />
      <Subscribe />
      {/* <Hero />
      <Message />
      <Test />
      <NinjaTurtle /> */}
      {/* <Layout/> */}

    </>
  )
}

export default IndexPage
