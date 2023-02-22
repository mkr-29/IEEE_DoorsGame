import React from 'react'
import "./Landing.css"
import V1 from "./Assets/V1.svg"
import V2 from "./Assets/V2.svg"
import V3 from "./Assets/V3.svg"
import V4 from "./Assets/V4.svg"
import V5 from "./Assets/V5.svg"
import V6 from "./Assets/V6.svg"
import V7 from "./Assets/V7.svg"
import V8 from "./Assets/V8.svg"
import IEEE from "./Assets/ieeelogo.svg"
import V9 from "./Assets/V9.svg"
import V10 from "./Assets/V10.svg"
import V11 from "./Assets/V11.svg"
import V12 from "./Assets/V12.svg"
import V13 from "./Assets/V13.svg"
import V14 from "./Assets/V14.svg"
import V15 from "./Assets/V15.svg"
import V16 from "./Assets/V16.svg"
import V17 from "./Assets/V17.svg"
import V18 from "./Assets/V18.svg"
import Login from '../FirebasePages/Registration/Login/Login'

export default function Landing() {
  return (
    <div className='d-landing'>
      <a href="/login" className='d-signup'>Login</a>
      <img src={V1} alt="" className='v1'/>
      <img src={V2} alt="" className='v2'/>
      <img src={V2} alt="" className='v3'/>
      <img src={V2} alt="" className='v4'/>
      <img src={V3} alt="" className='v5'/>
      <img src={V4} alt="" className='v6'/>
      <img src={V5} alt="" className='v7'/>
      <img src={V6} alt="" className='v8'/>
      <img src={V7} alt="" className='v9'/>
      <img src={V8} alt="" className='v10'/>
      <img src={V8} alt="" className='v11'/>
      <img src={V16} alt="" className='v16'/>
      <img src={V17} alt="" className='v17'/>
      <img src={V18} alt="" className='v18'/>
      <div className='d-main'>
        <img src={IEEE} alt="" className='ieee'/>
        <div className='d-title'>
          <span>Mysterious</span>
          <span>Conduct</span>
        </div>
        <span className='d-desc'>
        The game will be based on Escape rooms. There will be different stages in this game. The students have to solve the riddles, puzzles, or codes to unlock the passwords for all the rooms. Every riddle would be tech-based. The first person to conquer and unlock all the rooms or stages would be declared the winner
        </span>
        <div className='d-date'>
          <img src={V9} alt=""/>
          <span>FEB 26TH</span>
        </div>
        <div className='d-time'>
          <img src={V10} alt=""/>
          <span>10:00AM - 12:00PM</span>
        </div>
        <div className='d-socials'>
          <a href="/"><img src={V11} alt=""/></a>
          <a href="/"><img src={V12} alt=""/></a>
          <a href="/"><img src={V13} alt=""/></a>
          <a href="/" className='d-website'>ieeejuit.co.in</a>
        </div>
      </div>
        <div className='ornaments'>
            <span className='o1'/>
        </div>
        <img src={V14} alt="" className='v14'/>
        <img src={V15} alt="" className='v15'/>
    </div>
  )
}
