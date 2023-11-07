import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='text-center'>
        <p className='display-1 fw-bold text-center mt-5'>404 : Page Not Found</p>
        <Link className='btn btn-primary mt-5' to='/'>Back To Home</Link>
    </div>
  )
}

export default NotFound;