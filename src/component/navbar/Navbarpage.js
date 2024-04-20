import React,{useState,useEffect} from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
// import bay from './bay.png'
import {
    Link,NavLink 
  } from "react-router-dom";
  
function Navbarpage({isAuthenticated}) {
  const [scrolling, setScrolling] = useState(false);
  const handscroll=()=>{
    if (window.scrollY>12){
      setScrolling(true);
    }
    else{
      setScrolling(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',handscroll);
    return()=>{
      window.addEventListener('scroll',handscroll)
    }
  })
  return (
    <div className='nav_header'>
     <nav className={`navbar Navbar_first ${scrolling ? 'scrolling' : ''}`} style={{ position:"fixed",width:"100vmax",zIndex:"30"}}> 
    <Navbar className='navbar Navbar_sec'  collapseOnSelect expand="lg" bg="blue" variant="dark">
    <Container>
      <Navbar.Brand>Sahil EMBROIDERY</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            
        <li className="nav-item"><NavLink className="nav-link" to="/" exact="true" activeclassname="active-link">
  Home
</NavLink></li>
         <li className="nav-item"><NavLink className="nav-link" to="/service" activeclassname="active-link">
  Service
</NavLink></li> 
<li className="nav-item"><NavLink className="nav-link" to="/aboutus" activeclassname="active-link">
  About Us
</NavLink></li> 
        <li className="nav-item"><NavLink className="nav-link" to="/contactus" activeclassname="active-link">
        Contact Us
</NavLink></li>
         
          
        </Nav>
        <div className="form-check form-switch">
    <div className='iconfunc'>
    <Link className="nav-link"  style={{justifyContent:'center',display:'flex'}}><FaWhatsapp  style={{height:'35px',width:'1.5rem'}}/></Link>
    <Link className="nav-link" style={{justifyContent:'center',display:'flex'}}><FaFacebookF  style={{height:'2vmax',width:'1.5rem'}}/></Link>
    </div>
</div>
      </Navbar.Collapse>

    </Container>
  </Navbar>
   </nav> 
   </div>
  )
}

export default Navbarpage;