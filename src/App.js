import React from 'react'
import './App.css';
import Navbarpage from './component/navbar/Navbarpage';
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Firstpage from './component/firstpage/Firstpage';

function App() {
  return (
    <>
    <BrowserRouter>
   <Navbarpage/>
   <Routes>
  
   <Route path="/" element={<Firstpage />}/> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
