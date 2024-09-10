import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Navbar from '../src/components/Navbar'

function App() {

  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path = "/" element={<Home/>}/>
    <Route path = "/signin" element={<SignIn/>}/>
    <Route path = "/signup" element={<SignUp/>}/>
   </Routes>
   </BrowserRouter>

    </>
  )
}

export default App
