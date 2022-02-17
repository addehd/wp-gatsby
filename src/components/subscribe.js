import React from 'react'
import video from "./hero-bg.mp4"
import Banner from "../components/banner"

export default function subscribe() {
  return (
    <>
      {/* <img src={logo} alt="logo" /> */}
      <video id="subscribe-bg" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div id="mailchimp">
        <form>
          <input type="email" placeholder="Email Address" />
          <button type="submit">GET PRE-RELEASE INFO</button>  
        </form>
      </div>
      <Banner/>
    </>
  )
}
