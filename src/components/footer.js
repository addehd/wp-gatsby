import React from 'react'
import Space from '../media/space.svg'

export default function () {
  return (
   <section className="text-white  mx-auto min-h-[30rem] bg-bjjblue pt-11 pb-11">
     <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-4 mx-auto  p-7 sm:p-11'>
        <div>
          <h3 className='text-xl'>NFT's</h3><br/>
          <a href="">What are NFTs?</a><br/>
          <a href="">Why do NFTs have value?</a><br/>
          <a href="">How are NFTs created?</a><br/>
          <a href="">How can I buy NFT?</a><br/>
          <span className="font-thin">+</span>
        </div>
        <div>
          <h3 className='text-xl'>Blockchain</h3><br/>
          <a href="">What exactly is blockchain?</a><br/>
          <a href="">What is an example of blockchain?</a><br/>
          <span className="font-thin">+</span>
        </div>

        {/* 
        
What exactly is blockchain?
What is an example of blockchain?
Is Bitcoin a blockchain?
Who owns the blockchain?


        */}
     </div>
   </section>
  )
}
