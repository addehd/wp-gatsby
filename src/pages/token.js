import React from 'react'
import Header from '../components/header'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Message from "../components/message"
import Token from "../media/bjjtoken.webp"
import tokenSymbol from "../media/token-symbol.svg"
export default function Page() {
  return (
    <>
      <Header />
      <div className='bg-bjjblue'>
        <section className='container flex flex-col-reverse sm:flex-row m-auto min-h-full sm:min-h-screen justify-center'>
            <div className="flex justify-center flex-col p-5 sm:p-11 w-full sm:w-2/3 w-full">
              <h1 className="text-white text-4xl sm:text-6xl 2xl:text-5xl sm:mt-11 sm:mb-11 mt-1 mb-1 font-extrabold tracking-wider">BJJ token – Crypto currency backed by the BJJ community</h1>
              <p className='text-white lg:text-xl pb-11'> We are proud to present bjjtoken.io that is founded by experienced BJJ Black belts, for the needs and benefits of the BJJ community.</p>
            </div>
            <div className="mt-20 sm:mt-0 flex center w-full justify-center align-middle">
              <img className="w-full h-auto self-center" src={Token}></img>
            </div>
        </section>
      </div>

      <div className='message bg-white'>
        <div className='container flex justify-center items-center min-h-[27rem] m-auto p-7 pb-10 sm:p-11 sm-p-44 text-center'>
          <div className='max-w-[69rem]'>
            <h2 className='text-3xl sm:text-4xl m-5 text-[red] font-bold'><span><img className='w-[4rem] m-auto mb-2' src={tokenSymbol}/></span>BJJ token symbol</h2>
            <p className="text-l sm:text-xl text-red-600 text-[red]"> The philosophy of Jiu-Jitsu defines the state of mind that a warrior should adopt in combat to enable victory; it is a philosophy of yielding to an opponent's force, instead of trying to oppose force with force. Ultimately, the fundamentals for good Jiu-Jitsu are also the fundamentals of good character.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}