import React from 'react'
import Home from './home/Home'
import  Aboutcom from './aboutcom/Aboutcom';
import Home_service from './home_service/Home_service';
import Chooseus from './chooseus/Chooseus';
import Contact from './home_contanct/Contact';
function Firstpage() {
  return (
    <div>
      <Home/>
      <Aboutcom/>
      <Home_service/>
      <Chooseus/>
      <Contact/>
    </div>
  )
}

export default Firstpage
