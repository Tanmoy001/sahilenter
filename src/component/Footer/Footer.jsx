import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div className='footer_section'>
    <footer>
      <div className='footer_content'>
        <h3>Our Company</h3>
        <h3 style={{color:'blue'}}>SAHIL EMBROIDERY</h3>
        <p>
          We provide various kinds of Civil & Mechanical construction services that include Civil Construction work, Fabrication and Erection of pipelines, Structures, Tank Repair & Tank fabrication & erection Work.
        </p>
      </div>
      <div className='footer_content'>
        <h3>Quick Links</h3>
        <ul>
          <li>Clientele</li>
          <li>Projects</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className='footer_content'>
        <h3>Social Media</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <div className='footer_content'>
        <h3>Working Hours</h3>
        <p>Mon – Sat: 09am – 08pm</p>
        <p>Mon – Sat: 09am – 08pm</p>
        <p>Mon – Sat: 09am – 08pm</p>
        <p>Mon – Sat: 09am – 08pm</p>
        <p>Mon – Sat: 09am – 08pm</p>
      </div>
      <div className='footer_content'>
        <h3>Contact Us</h3>
        <p>Khalpol, Kolkata-700 001</p>
        <p>E-mail: info@sahilemm.com</p>
        <p>+91 033-4005-2352</p>
      </div>
    </footer>
    <p>Copyright ©2024 sahilembroidary.com</p>
    </div>
  );
}

export default Footer;