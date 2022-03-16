//https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-wordpress/
import Header from "../components/header"

import React from "react"
import { graphql, Link } from "gatsby"

const ComponentName = ({ data }) => { return (
  <section className="bg-[#110e36] text-white">
      { data.allWpPost.nodes.map(post => (
        <article className="max-w-4xl	 mx-auto" key={post.id}>
          <h1>{post.title}</h1>
          <a src="test"> slug </a>
          <Link className='text-red m-[0.8rem]' to={"/" + post.slug}>...</Link>

          <p className="mt-2" dangerouslySetInnerHTML={{__html: post.content}}></p>
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
