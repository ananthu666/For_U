import { useState } from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Services from './Pages/Services'
import Choice from './Pages/Choice'
import Care_taker from './Pages/Cgp_signup'
import Care_reciever from './Pages/Crp_signup'
function App() {
  
  
  return (
    <>
      <BrowserRouter >
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Signup/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/choices" element={<Choice/>}></Route>
      <Route path="/cgp" element={<Care_taker/>}></Route>
      <Route path="/crp" element={<Care_reciever/>}></Route>

      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
