import React from 'react'
import Header from '../components/header'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Message from "../components/message"
import Line from "../media/fighters-lines.png"
import Fighter from "../media/fighters.png"
import BuchechaNFT from "../media/nfts/buchecha-nft-light.webp"

export default function NFTS() {
  return (
    <>
      <Header />
      <div className='fighters bg-bjjblue'>
        <section className='container flex flex-col-reverse sm:flex-row m-auto h-auto sm:min-h-[85vh] justify-center'>
            <div className="flex justify-center flex-col p-5 sm:p-11 w-full sm:w-2/3 w-full sm:w-1/2">
              <h1 className="text-white text-4xl sm:text-6xl 2xl:text-5xl sm:mt-11 sm:mb-11 mt-1 mb-1 font-extrabold tracking-wider">BJJ token NFTs</h1>
              <p className='text-white lg:text-xl pb-11'>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven.</p>
            </div>
            
          <div className="block sm:relative w-full sm:w-1/2  min-h-[21rem]  sm:min-h-[33rem] top-0">
            <img className="top-[4rem] sm:top-[9rem] bottom-auto sm:bottom-[9rem] right-0  left-0 m-auto h-auto absolute " src={Fighter}></img>
            <img className="pulse  top-[4rem] sm:top-[9rem] bottom-auto sm:bottom-[9rem] right-0  left-0 m-auto h-auto absolute " src={Line}></img>
            {/* <Circle /> */}
          </div>
            {/* <div className="mt-20 sm:mt-0 flex center w-full justify-center align-middle">
              <img className="w-full h-auto self-center w-[84%]" src={Token}></img>
            </div> */}
        </section>
      </div>
      <div className='nfts'>
        <div className="bg-[#2d2d4c] bg-[url('../media/texture-lines.webp')] bg-cover pt-[5%] pb-[5%]">
        <h5 className='text-white text-center text-[#616dcd]'>Buchecha NFT Hologram Series</h5>
          <section className='container grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-5 sm:gap-4 mx-auto  p-6 sm:p-11 '>
            
            <div className="rounded-lg bg-bjjblue border-solid border-[1px] border-[#6e84f4]">
              <img className="w-full pt-1 pb-1" src={BuchechaNFT}/>
            </div>
            <div className="rounded-lg bg-bjjblue border-solid border-[1px] border-[#6e84f4]">
              <img className="w-full pt-1 pb-1" src={BuchechaNFT}/>
            </div>
            <div className="rounded-lg bg-bjjblue border-solid border-[1px] border-[#6e84f4]">
              <img className="w-full pt-1 pb-1" src={BuchechaNFT}/>
            </div>
            <div className="rounded-lg bg-bjjblue border-solid border-[1px] border-[#6e84f4]">
              <img className="w-full pt-1 pb-1" src={BuchechaNFT}/>
            </div>
            <div className="rounded-lg bg-bjjblue border-solid border-[1px] border-[#6e84f4]">
              <img className="w-full pt-1 pb-1" src={BuchechaNFT}/>
            </div>
          </section>
          <h5 className='text-white text-center text-[#616dcd]'>Leo Vieira NFT Hologram Series</h5>
          <section className='container grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-5 gap-5 sm:gap-4 mx-auto  p-6 sm:p-11 '>
            
            <div className="rounded-lg bg-bjjblue border-solid border-[1px] border-[#6e84f4]">
              <img className="w-full pt-1 pb-1" src={BuchechaNFT}/>
            </div>
            <div className="rounded-lg bg-bjjblue border-solid border-[1px] border-[#6e84f4]">
              <img className="w-full pt-1 pb-1" src={BuchechaNFT}/>
            </div>
            <div className="rounded-lg bg-bjjblue border-solid border-[1px] border-[#6e84f4]">
              <img className="w-full pt-1 pb-1" src={BuchechaNFT}/>
            </div>
            <div className="rounded-lg bg-bjjblue border-solid border-[1px] border-[#6e84f4]">
              <img className="w-full pt-1 pb-1" src={BuchechaNFT}/>
            </div>
            <div className="rounded-lg bg-bjjblue border-solid border-[1px] border-[#6e84f4]">
              <img className="w-full pt-1 pb-1" src={BuchechaNFT}/>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}