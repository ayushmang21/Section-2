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
import StateManagement from './components/StateManagement';
import ToDoApp from './components/ToDoApp';
import Post from './components/post';
import NotFound from './components/NotFound';
import Chat from './components/Chat';

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
              <Route path='/todo' element={<ToDoApp />} />
              <Route path='/post' element={<Post />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='*' element={<NotFound />} />

            </Routes>
        </BrowserRouter>
        
      </div>

    </>
  )
}

export default App;