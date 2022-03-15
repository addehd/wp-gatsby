import React from 'react'
import Header from '../components/header'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Message from "../components/message"
import Token from "../media/bjjtoken.webp"

export default function Page() {
  return (
    <>
      <Header />
      <div className='bg-bjjblue'>
        <section className='container flex flex-col-reverse sm:flex-row m-auto min-h-full sm:min-h-screen justify-center'>
            <div className="flex justify-center flex-col p-5 sm:p-11 w-full sm:w-2/3 w-full sm:w-1/2">
              <h1 className="text-white text-4xl sm:text-6xl 2xl:text-5xl sm:mt-11 sm:mb-11 mt-1 mb-1 font-extrabold tracking-wider">BJJ token – Crypto currency backed by the BJJ community</h1>
              <p className='text-white lg:text-xl pb-11'> We are proud to present bjjtoken.io that is founded by experienced BJJ Black belts, for the needs and benefits of the BJJ community.</p>
            </div>
            <div className="mt-20 sm:mt-0 flex center w-full justify-center align-middle">
              <img className="w-full h-auto self-center w-[84%]" src={Token}></img>
            </div>
        </section>
      </div>
      <Message />
      <Footer />
    </>
  )
}