

// Importaciones Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { Hospitals } from './components/Hospitals/Hospitals'
import { Forms } from './components/Forms/Forms'
import { Maps } from './components/Maps/Maps'
import { Contact } from './components/Contact/Contact'

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes} from "react-router-dom"

function App() {

  const location = useLocation();

  useEffect(() => {
    const body = document.querySelector('body');
    if (location.pathname === '/home') {
      body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("../public/img/hospital.jpg")';
    } else if (location.pathname === '/contact') {
      body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("../public/img/contact.jpg")';
    } else {
      body.style.backgroundImage = 'url("")';
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/*' element={ <Home></Home> }></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/hospitals' element={<Hospitals></Hospitals>}></Route>
        <Route path='/maps' element={<Maps></Maps>}></Route>
        <Route path='/forms' element={<Forms></Forms>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </>
  )
}

export default App
