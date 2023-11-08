import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ fontFamily: 'Quicksand' }} className='text-center'>
        <p style={{ color: '#5627CC', fontFamily: 'Quicksand', fontWeight: 'bolder' }} className='display-1 text-center mt-4 mb-2'>404 : Page Not Found..!!</p>
        <img style={{ width: 550, }} src="https://cdn.dribbble.com/users/2260392/screenshots/6016827/media/6cf374a58f51f9c340897118b53a0c84.jpg" alt="" />
        {/* <img style={{ width: 550 }} src="https://cdn.dribbble.com/users/3382278/screenshots/14136894/media/b72c084e45a0b51f870f9c3d91bc21ff.gif" alt="" /> */}
        <br />
        <Link className='btn mt-1 p-2' style={{ backgroundColor: '#5627CC', color: 'white' }} to='/'>Back To Home</Link>
    </div>
  )
}

export default NotFound;