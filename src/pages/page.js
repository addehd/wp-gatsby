import React from 'react'
import Header from '../components/header'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Message from "../components/message"

export default function Page() {
  return (
    <>
      <Header />
      <section className='bg-bjjblue'>
          <div className='container m-auto flex justify-center flex-col sm:p-11 w-ful min-h-[40rem] p-7'>
            <h1 className="text-white text-4xl sm:text-6xl 2xl:text-5xl sm:mt-11 sm:mb-7 mt-1 mb-1 font-extrabold tracking-wider">Example page</h1>
            <p className='text-white lg:text-xl pb-11'> We are proud to present bjjtoken.io that is founded by experienced BJJ Black belts, for the needs and benefits of the BJJ community.</p>
          </div>
        </section>
      <Message />
      <Footer />
    </>
  )
}