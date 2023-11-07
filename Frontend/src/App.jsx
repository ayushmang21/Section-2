import React from 'react'
import './App.css'
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>

      <div>
        <BrowserRouter>
            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/contactus' element={<ContactUs />} />

            </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App;