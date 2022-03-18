import React, { useState } from 'react';
import Header from '../components/header'
import SEO from '../components/seo'
import Footer from '../components/footer'
import Message from "../components/message"
import Line from "../media/fighters-lines.png"
import Fighter from "../media/fighters.png"
import BuchechaNFT from "../media/nfts/buchecha-nft-light.webp"

export default function NFTS() {
  const [readmore, showMore] = useState(true);
  function togleMore(){
    showMore(!readmore);
    console.log(readmore);
  }

  return (
    <>
      <Header />
      <div className='fighters bg-bjjblue'>
        <section className='container flex flex-col-reverse sm:flex-row m-auto h-auto sm:min-h-[85vh] justify-center'>
            <div className="flex justify-center flex-col p-5 sm:p-11 w-full sm:w-2/3 w-full sm:w-1/2 text-white">
              <h1 className="text-white text-4xl sm:text-6xl 2xl:text-5xl sm:mt-11 sm:mb-11 mt-1 mb-1 font-extrabold tracking-wider">NFTs</h1>

              <p className="py-3">Non-fungible tokens (NFTs) are cryptographic assets on a blockchain with unique identification codes and metadata that distinguish them from each other. </p>
              <p className="py-3">Here at Bjjtoken.io we are creating NFT’s for a selection of BJJ Athletes, Academies or Organisation representing Brazilian Jiu Jitsu.</p>
              <p className="py-3">And we make sure that 75% of the sales profit of the NFT’s goes back to the community. It will be divided up as follows: 50% to the Athlete featured in the NFT, 20% to the Academy/Gym he or she represents, and finally 5% is divided in a pool among all the BJJ Token wallet holders. </p>

              
              <button onClick={togleMore} className={ readmore ? "visible button mt-5": "invisible button" } >Readmore</button>
              <div className={ readmore ? "h-0 overflow-hidden": "h-full overflow-hidden" }>
              <ul className='list-disc pl-5'>
                <li className='py-1'>NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated.</li>
                <li className='py-1'>NFTs can represent real-world items like artwork and real estate.</li>
                <li className='py-1'>"Tokenizing" these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud.</li>
                <li className='py-1'>NFTs can also function to represent individuals' identities, property rights, and more.</li>
              </ul>
              <p className='py-3'>The distinct construction of each NFT has the potential for several use cases. For example, they are an ideal vehicle to digitally represent physical assets like real estate and artwork. </p>
              <p className='py-3'>Because they are based on blockchains, NFTs can also work to remove intermediaries and connect artists with audiences or for identity management. NFTs can remove intermediaries, simplify transactions, and create new markets.</p>
              <p className='py-3'>And the simpel fact is that this is the future, and a fast growing market.</p>
              <p className='py-3'>Our mission is to make sure that the BJJ community get’s educated on this subject, as well as getting the opportunity to participate in the economical advantages and commerce NFT’s and Blockchain brings.</p>
              </div>
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