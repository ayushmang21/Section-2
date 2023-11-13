import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navbar from './components/navbar';
import EventHandling from './components/EventHandling';
import NotFound from './components/NotFound';
import StateManagement from './components/StateManagement';

const App = () => {
  return (
    <>

      <div>

        <BrowserRouter>
        <Navbar />

            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/contactus' element={<ContactUs />} />
              <Route path='/event' element={<EventHandling />} />
              <Route path='/state' element={<StateManagement />} />
              <Route path='*' element={<NotFound />} />

            </Routes>
        </BrowserRouter>
        
      </div>

    </>
  )
}

export default App;