import React from 'react'
import CircleSVG from "../media/bu-circle.svg"

export default function Circle(test) {
  const [show, setShow] = React.useState(false)
  console.log(test)
  const handleClick = () => {
    setShow(!show) }

  return (
    <>
      <img onClick={handleClick}  className="top-0 left-[11rem] bottom-0 right-0 m-auto h-auto absolute max-w-[4rem] sm:max-w-[5rem] rotate" src={CircleSVG}></img>
      <div  onClick={handleClick} className="top-0 left-[2rem] bottom-0 right-0 m-auto h-auto absolute w-[11rem] h-[8rem] bottom-[7rem] buchecha"  style={ show ? { visibility:'visible', transition: 'background-color 0.2s ease-in' } : {visibility:'hidden'}}>
        <table className="infobox vcard">
          <tbody>
          <tr>
            <th>Name</th>
            <td>Buchecha...</td>
          </tr>
          <tr>
            <th>Nationality</th>
            <td>Brazilian<br />American</td>
          </tr>
          <tr>
            <th>Rank</th>
            <td>1st degree black belt</td>
          </tr>
          <tr>
            <th>Mundials</th>
            <td>13 gold</td>
          </tr>
          <tr>
            <th>Division</th>
            <td>Heavyweight</td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
