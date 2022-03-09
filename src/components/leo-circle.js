import React from 'react'
import LeoCircleSVG from "../media/leo-circle.svg"

export default function LeoStats(test) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => {
    setShow(!show) }

  return (
    <>
      <img onClick={handleClick}  className="top-[0] left-[7rem] bottom-[6rem] sm:bottom-[21rem]  right-0 m-auto h-auto absolute max-w-[4rem] sm:max-w-[5rem] rotate" src={LeoCircleSVG}></img>
      <div  onClick={handleClick} className="top-[0] left-[2rem] bottom-[7rem] sm:bottom-[22rem]  right-0 m-auto h-auto absolute w-[11rem] h-[8rem] bottom-[7rem] buchecha"  style={ show ? { visibility:'visible', transition: 'background-color 0.2s ease-in' } : {visibility:'hidden'}}>
        <table className="infobox vcard">
          <tbody>
          <tr>
            <th>Name</th>
            <td>Leo Vieira</td>
          </tr>
          <tr>
            <th>Nationality</th>
            <td>Brazilian</td>
          </tr>
          <tr>
            <th>Rank</th>
            <td>6th Degree Black Belt</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>Legend</td>
          </tr>
          <tr>
            <th>Division</th>
            <td>Featherweight</td>
          </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
