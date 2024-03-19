import React from 'react'
import './App.css';
import Navbarpage from './component/navbar/Navbarpage';
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Firstpage from './component/firstpage/Firstpage';
import Footer from './component/Footer/Footer';
import Services from './component/Servies/Services';
import Contactus from './component/Contactus/Contactus';
import Aboutus from './component/Aboutus/Aboutus';

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbarpage/>
     <Routes>
      <Route path="/" element={<Firstpage />}/> 
      <Route exact path="/service" element={<Services />}/> 
      <Route exact path="/contactus" element={<Contactus />}/> 
      <Route exact path="/aboutus" element={<Aboutus />}/> 
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
