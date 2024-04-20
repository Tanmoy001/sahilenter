import React from 'react'
import Home from './home/Home'
import  Aboutcom from './aboutcom/Aboutcom';
import HomeService from './home_service/HomeService';
import Contact from './home_contanct/Contact';
import ChooseUs from './chooseus/ChooseUs';
function Firstpage() {
  return (
    <>
      <Home/>
      <Aboutcom/>
      <HomeService/>
      <ChooseUs/>
      <Contact/>
    </>
  )
}

export default Firstpage
