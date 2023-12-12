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
import ListPost from './components/ListPost';
import { Toaster } from 'react-hot-toast';
import CreatePost from './components/CreatePost';
import { SnackbarProvider } from 'notistack';
import ManageUser from './components/ManageUser';

const App = () => {
  return (

      <div>
        <SnackbarProvider anchorOrigin={{horizontal: 'right',vertical:'top'}} maxSnack={3}>
        <Toaster position='top-center' />
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
              <Route path='/listpost' element={<ListPost />} />
              <Route path='/createpost' element={<CreatePost />} />
              <Route path='/manage' element={<ManageUser />} />
              <Route path='*' element={<NotFound />} />

            </Routes>
        </BrowserRouter>
        </SnackbarProvider>
        
      </div>

  )
}

export default App;