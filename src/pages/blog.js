//https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-wordpress/
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"
import Header from "../components/header"

import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => { return (
  <section>
    <Header />
    { data.allWpPost.nodes.map(post => (
      <article key={post.id}>
      <h1>{post.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: post.content }} />
      </article> ) ) }
    <pre>
      {console.log(data)}
      {JSON.stringify(data, null, 4)}
    </pre>
  </section>
) }

export const query = graphql`
  {
    allWpPost {
      nodes {
        title
        slug
        content
        id
      }
    }
  }
`

export default ComponentName
