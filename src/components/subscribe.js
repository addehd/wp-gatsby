import React, { useRef, useState } from 'react';
import Video from "../media/hero-bg.mp4"
import mFight from "../media/mfight.gif"
import Banner from "../components/banner"
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default function Subscribe() {
  const yourMail = useRef(null);
  const [isOpen, setOpen] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    if(validateEmail(yourMail.current.value)){
      setOpen(isOpen => !isOpen)
      console.log("Subscribed!")
      addToMailchimp(yourMail.current.value)
      .then(data => {
        console.log(data) })
      yourMail.current.value = ""; } }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email); }
  
  return (
    <>
      <video className="invisible sm:visible fixed object-cover w-full h-screen top-0 left-0" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <img className="sm:hidden object-cover w-full fixed h-screen top-0 left-0" src={mFight}></img>
      <div id="mailchimp" className='flex column'>
        <form className="ml-11 mr-11">
          <input ref={yourMail} type="email" placeholder="Your email" />
          <button onClick={handleSubmit} type="submit">GET PRE-RELEASE INFO</button>
          { isOpen && <p className='ml-5 mt-3 '>Thank you! {console.log(isOpen)}</p>}
        </form>
      </div>
      <Banner/>
    </>
  )
}