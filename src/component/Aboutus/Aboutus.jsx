import React from 'react'
import './Aboutus.css';
import pic from './pic.webp'
import pic1 from './founder.png'
import { TbTargetArrow } from "react-icons/tb";
function Aboutus() {
  return (
    <div className='about-us-container'>
      <div className='Aboutus_section'>
        <div className='about_us_background'>
          <div className='about_us_text'>
            <h4>About Us</h4>
            <p>Know about our company and us</p>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_com_cont'>
            <div className='abt_heading'>Our Company</div>
            <p>asddfddsdf safd asddf asf asddfd safdd asdf asf </p>
          </div>
          <div className='company_pic'>
            <img src={pic} alt="Company_Picture" />
          </div>
        </div>
        <div className='about_founder'>
          <div className='design_ceo'>
            <h3 className='and'>&</h3>
            <div className='design_title'>
              <h5 className='ceo'>CEO</h5>
              <h5 className='founder'>Founder</h5>
            </div>
          </div>
          <div className='founder_img'>
            <img src={pic1} alt='founder' />

          </div>
          <div className='content_about_founder'>
            <h4>Jackey  Zhang</h4>
            <h6>Founding and CEO</h6>
            <p>asdfa sadfd asdd asfdd asf asdf </p>
          </div>
        </div>
        <div className='company_goals_container'>
          <div className='company_goal_section'>
            <div className='company_goal_header'>
              <h6>Company Goals</h6>
              <h4>What Sets Us Apart</h4>
            </div>
            <div className='goal_sections'>
              <div className='goal_card'>
                <TbTargetArrow />
                <h6>Our Mission</h6>
                <p>asdf dsaf sdf was established with the vision innovative services in the construction of pipeline and storage tank projects. By undertaking large commercial and industrial projects, we have made our presence felt in a big way. With a skilled team of manpower and state-of-the-art technologies, we have created a niche for ourselves in the market.</p>
              </div>
              <div className='goal_card'>
                <TbTargetArrow />
                <h6>Our Mission</h6>
                <p>asdf dsaf sdf was established with the vision innovative services in the construction of pipeline and storage tank projects. By undertaking large commercial and industrial projects, we have made our presence felt in a big way. With a skilled team of manpower and state-of-the-art technologies, we have created a niche for ourselves in the market.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Aboutus
