import React, {useState} from 'react'
import Line from "../media/leo-lines.png"
import Fighter from "../media/leo.png"
import Circle from "../components/leo-circle"

export default function Test() {
  const [readmore, showMore] = useState(true);
  function togleMore(){
    showMore(!readmore);
    console.log(readmore);
  }

  return (
    <div className='bg-bjjblue'>
      <section className='container m-auto hb-0 sm:mb-auto sm:min-h-screen flex flex-col sm:flex-row'>
          <div className="relative w-[100%] sm:w-1/2 h-[27rem] sm:h-[auto]">
            <img className="w-full sm:w-[95%] top-0 bottom-0 left-0 right-0 mb-0 sm:mb-auto m-auto h-auto absolute left-0" src={Fighter}></img>
            <img className="pulse w-full sm:w-[95%] top-0 bottom-0 left-0 right-0 mb-0 sm:mb-auto m-auto h-auto absolute left-0" src={Line}></img>
            {/* <img className="pulse-slow w-[80%] sm:w-[95%] top-0 bottom-0 left-0 right-0 m-auto h-auto absolute left-0" src={Line}></img> */}
            <Circle img="bu-circle.svg"/>
          </div>
          
          <div className="flex justify-center flex-col p-5 pb-20  sm:p-11 w-[100%] sm:w-1/2 text-white">
            <h2 className="text-white text-5xl mt-3 mb-3 tracking-wider">WHY</h2>
            <p className="py-3  text-[1rem] sm:text-[1.5rem]">As Founders, we have collectively been a part of the BJJ community for close to 40 years, and we know and understand the challenges and needs.</p>
            <p className="py-3">For that reason, we want to create a prospering economy for the BJJ community that can be self-sustainable using Blockchain technology.</p>
            <p className="py-3">
              The first part will be NFT’s, and through the purchase of NFT buyers will be given the BJJ token.
              And we created tokenomics that will not only benefit the Athlete featured in the NFT, but also the Academy the Athlete is representing.
            </p>


            <button onClick={togleMore} className={ readmore ? "visible button mt-5": "invisible button" } >Readmore</button>
             <div className={ readmore ? "h-0 overflow-hidden": "h-full overflow-hidden" }>
             <p className="py-3 text-[1rem] sm:text-[1.5rem]"><span>Another challenge</span> that a lot of competing athletes are facing, is finding financial support and sponsoring. And that is another part we want to solve through this project.</p>
            <p className="py-3">We also want to help BJJ academies build a stronger economy overall in different ways using Blockchain. We know and understand that there are several expenses and fees like federation, competition, travel, etc.</p>
              <p className="py-3">Our mission is to build up a strong economy within the BJJ community itself, and we believe that with our NFT’s and BJJ token as our own digital currency, Academies and Teams can prosper. </p>

              <p className="py-3">But for that to happen we also understand that through our Platform bjjtoken.io and our Ambassadors we will actively educate people on Blockchain, NFT’s, and Crypto.</p>

              <p className="py-3">Cryptocurrency is the most significant economic shift of wealth in history where there are no barriers.</p>
              
              <p className="py-3">And we the BJJ community can’t afford to be left behind, and for that reason, we decided to take the initiative to make sure that our community get our fair share of the crypto market cap that is projected to hit $2 trillion this year (2022)</p>
            </div>

          </div>
      </section>
    </div>
  )
}
