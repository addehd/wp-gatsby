import React from 'react'
import Video from "../media/hero-bg.mp4"
import Banner from "../components/banner"

export default function subscribe() {
  return (
    <>
      {/* <img src={logo} alt="logo" /> */}
      <video id="subscribe-bg" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div id="mailchimp">
        <form className="ml-11 mr-11">
          <input type="email" placeholder="Your email" />
          <button type="submit">GET PRE-RELEASE INFO</button>  
        </form>
      </div>
      <Banner/>
    </>
  )
}
