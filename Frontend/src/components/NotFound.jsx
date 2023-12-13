import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ fontFamily: 'Montserrat' }} className='text-center'>

      <p style={{ color: '#391b7f', fontWeight: 'bolder' }} className='display-1 text-center mt-4 mb-2'>
        404 : Page Not Found..!!
      </p>

      <img style={{ width: 550, }} src="https://cdn.dribbble.com/users/2260392/screenshots/6016827/media/6cf374a58f51f9c340897118b53a0c84.jpg" alt="" />

      <br />

      <Link className='btn mt-1 p-2 fw-medium' style={{ backgroundColor: '#391b7f', color: 'white' }} to='/'>
        Back To Home
      </Link>

    </div>
  )
}

export default NotFound;