import React, { useRef } from 'react';
import Video from "../media/hero-bg.mp4"
import mFight from "../media/mfight.gif"
import Banner from "../components/banner"

export default function Subscribe() { 
  const videoRef = useRef(null);
  console.log(videoRef)
  return (
    <>
    {/* {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0; 
      
    } */}
      <video ref={videoRef} className="invisible sm:visible fixed object-cover w-full h-screen top-0 left-0" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>

      <img className="sm:hidden object-cover w-full fixed h-screen top-0 left-0" src={mFight}></img>

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