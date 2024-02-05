

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

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes} from "react-router-dom";
import { Login } from './components/Accounts/Login';
import { Register } from './components/Accounts/Register';

import imgHospitals from '../public/img/hospital.jpg';
import imgForms from '../public/img/forms.jpg';
import imgContact from '../public/img/contact.jpg';
import imgMaps from '../public/img/maps.jpg';
import imgRegister from '../public/img/register.jpg';

export const UsuarioContext = React.createContext();

function App() {

  const [logged, setLogged] = useState(false);
  const [name, setName] = useState(' ');

  const location = useLocation();

  useEffect(() => {
    const body = document.querySelector('body');
    var backgroundImage = '';

    switch (location.pathname) {
      case '/':
        backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${imgHospitals}")`;
        break;
      case '/forms':
        backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${imgForms}")`;
        break;
      case '/contact':
        backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${imgContact}")`;
        break;
      case '/maps':
        backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${imgMaps}")`;
        break;
      case '/login':
      case '/register':
        backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${imgRegister}")`;
        break;
      default:
        backgroundImage = 'url("")';
        break;
    }
  
    body.style.backgroundImage = backgroundImage;
  });

  return (
    <UsuarioContext.Provider value={[logged, setLogged, name, setName]}>
      <Navbar/>
      <Routes>
        <Route path='/*' element={ <Home></Home> }></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/hospitals' element={<Hospitals></Hospitals>}></Route>
        <Route path='/maps' element={<Maps></Maps>}></Route>
        <Route path='/forms' element={<Forms></Forms>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </UsuarioContext.Provider>
  )
}

export default App
