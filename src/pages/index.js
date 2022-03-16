import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Subscribe from "../components/subscribe"
import Hero from "../components/hero"
import Header from "../components/header"
import Message from "../components/message"
import Test from "../components/test"
import Grid from "../components/grid"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <>
      <Seo title="Index" />
      {/* <Subscribe /> */}
      <Header />
      <Hero />
      <Message />
      <Test />
      <Grid />
      {/* <Layout/> */}
      <Footer />
    </>
  )
}

export default IndexPage