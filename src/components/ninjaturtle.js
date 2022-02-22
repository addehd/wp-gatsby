import React from "react"
import { graphql } from "gatsby"
import addToMailchimp from 'gatsby-plugin-mailchimp'

function chimp() {
  addToMailchimp("test@lala.se") // listFields are optional if you are only capturing the email address.
  .then(data => {
    // I recommend setting data to React state
    // but you can do whatever you want (including ignoring this `then()` altogether)
    console.log(data)
  })
  .catch(() => {
    // unnecessary because Mailchimp only ever
    // returns a 200 status code
    // see below for h  ow to handle errors
  })
}

//chimp()

function ninjaturtle({ data }) {
  return (
    <pre>{JSON.stringify(data, null, 4)}data</pre>
  )
}

export const pageQuery = graphql`
query {
  wpUser {
    id
  }
}
`
export default ninjaturtle