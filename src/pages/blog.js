//https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-wordpress/
import Header from "../components/header"

import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => { return (
  <section className="bg-[#110e36]">
      { data.allWpPost.nodes.map(post => (
        <article className="max-w-4xl	 mx-auto" key={post.id}>
          <h1>{post.title}</h1>
          <p dangerouslySetInnerHTML={{__html: post.content}}></p>
        </article> 
        )
      ) 
      }
  </section> ) }

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
