import React from 'react'
import video from "./hero-bg.mp4"

export default function hero() {
  return (
    <section>
      {/* <img src={logo} alt="logo" /> */}
      <video id="hero-bg" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div id="mailchimp">
        <form>
          <input type="email" placeholder="Email Address" />
          <button type="submit">Subscribe</button>  
        </form>
      </div>
    </section>
  )
}
