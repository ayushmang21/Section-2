import React from 'react'
import './App.css'
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/navbar';

const App = () => {
  return (
    <>

      <div>

        <BrowserRouter>
        <Navbar />

        {/* {<Link to="/">Home Page</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contactus">Contact Us</Link>} */}
        
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