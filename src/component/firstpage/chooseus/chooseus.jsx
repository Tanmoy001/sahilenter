import React from 'react'
import pic from './bkg.png';
import'./chooseus.css';
import { FaAward } from "react-icons/fa";
function Chooseus() {
  return (
    <div className='Cooseus_section'>
      <div className='cooseus_container'>
        <img src={pic} alt="background" />
        <div className='Content_section'>
          <h4>Why Choose Us</h4>
          <h2>Six Reasons For People Choosing  Our Services.</h2>
          <div className='reasons_sections'>
            <div className='reasons_content'>
              <FaAward />
              <h5>Proven Expertise</h5>
              <p>With over 15 years of experience in the industry, ESSDEE PROJECTS has a track record of successfully delivering a wide range of civil and mechanical construction projects.</p>
            </div>
            <div className='reasons_content'>
              <FaAward />
              <h5>Proven Expertise</h5>
              <p>With over 15 years of experience in the industry, ESSDEE PROJECTS has a track record of successfully delivering a wide range of civil and mechanical construction projects.</p>
            </div>
            <div className='reasons_content'>
              <FaAward />
              <h5>Proven Expertise</h5>
              <p>With over 15 years of experience in the industry, ESSDEE PROJECTS has a track record of successfully delivering a wide range of civil and mechanical construction projects.</p>
            </div>
            <div className='reasons_content'>
              <FaAward />
              <h5>Proven Expertise</h5>
              <p>With over 15 years of experience in the industry, ESSDEE PROJECTS has a track record of successfully delivering a wide range of civil and mechanical construction projects.</p>
            </div>
            <div className='reasons_content'>
              <FaAward />
              <h5>Proven Expertise</h5>
              <p>With over 15 years of experience in the industry, ESSDEE PROJECTS has a track record of successfully delivering a wide range of civil and mechanical construction projects.</p>
            </div>
            <div className='reasons_content'>
              <FaAward />
              <h5>Proven Expertise</h5>
              <p>With over 15 years of experience in the industry, ESSDEE PROJECTS has a track record of successfully delivering a wide range of civil and mechanical construction projects.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Chooseus
