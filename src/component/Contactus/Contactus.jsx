import React from 'react'
import './contactus.css';
import Contactform from '../contactusform/Contactform';
import { FaLocationDot } from "react-icons/fa6";
function Contactus() {
  return (
    <div className='contact-us-container'>
      <div className='contact-us-section'>
        <div className='contact_us_background'>
          <div className='contact_us_text'>
            <h4>Contact Us</h4>
            <p>For any kind of query and information</p>
          </div>
        </div>
        <div className='info_container'>
          <div className='content_section'>
            <div className='content_section_one'>
              <h5>Address</h5>
              <h4>Our Office</h4>
              <p>Khalpol , Thakurpukur, Kolkata - 700063</p>
              <div className='phone_number'><p>Phone: +91 033-4005-2352</p></div>
              <div className='email'>Email: info@bestengineering.</div>
            </div>
            <div className='Contact_section'>
              <Contactform />
            </div>
          </div>
        </div>
        <div className='personal_contact_section'>
          <div className='pcontact_section'>
            <div className='pcontact_title'>
              <h4>Main Office</h4>
            </div>
            <div className='pcontact_details'>
              <h5><FaLocationDot />Kolkata 7000104</h5>
              <p>Khlapol</p>
            </div>
          </div>
          <div className='pcontact_section'>
            <div className='pcontact_title'>
              <h4>Main Office</h4>
            </div>
            <div className='pcontact_details'>
              <h5><FaLocationDot />Kolkata 7000104</h5>
              <p>Khlapol</p>
            </div>
          </div>
          <div className='pcontact_section'>
            <div className='pcontact_title'>
              <h4>Main Office</h4>
            </div>
            <div className='pcontact_details'>
              <h5><FaLocationDot />Kolkata 7000104</h5>
              <p>Khlapol</p>
            </div>
          </div>
        </div>

        <div className="mapouter">
          <div className="gmap_canvas">
          <iframe
        title="Google Map"
        className="gmap_iframe"
        style={{ border: 0, width: '100%', height: '100%', position: 'absolute' }}
        src="https://maps.google.com/maps?width=850&amp;height=600&amp;hl=en&amp;q=sahil%20embro&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        allowFullScreen=""
      ></iframe>
          </div>
          <style>
            {`
          .mapouter {
            position: relative;
            text-align: right;
            width: 100%;
            height: 600px;
            display:flex;
            justify-content: center;
            margin-bottom: 3rem;
          }
          .gmap_canvas {
            overflow: hidden;
            background: none!important;
            width: 100%;
            height: 600px;
            display: flex;
    justify-content: center;
          }
          .gmap_iframe {
            width: 90%!important;
            height: 600px!important;
          }
        `}
          </style>
        </div>

      </div>

    </div>
  )
}

export default Contactus
