import React from 'react'
import pic from './pic.webp'
import './home.css'
import { IoCall } from "react-icons/io5";
function Home() {
  return (
    <div className='home_section'>
        <div className='home'>
            <div className='image_section'>
                <img src={pic} alt='profile_picture'/>
            </div>
            <div className='home_content'>
              <h1 className='tittle'>Sahil Embroidery</h1>
              <p>With 15+ years of experience and a commitment to quality, we undertake a wide range of projects,
              our mission is to deliver excellence in every project we undertake</p>
              <button><IoCall className='icon'/> &nbsp;Contant now</button>
            </div>
        </div>
    </div>
  )
}

export default Home
