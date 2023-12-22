import React from 'react'
// import MySvg from "/Users/Dell/Downloads/undraw_blooming_re_2kc4.svg";
import pic from '../assets';

const Home = () => {
  return (
    <div className='homepg' style={{ fontFamily: 'Montserrat' }}>

      <div style={{ backgroundColr: '#D9C0C1' }} className='py-1'>
        <h1 className='my-4 text-center' style={{ fontSize: 70, }}>Welcome to&#160;
          <span style={{ color: 'white', fontFamily: 'monospace', textDecoration: 'underline' }}>
            Voilet.io
          </span>
        </h1>
      </div>

      <div className='mt-5'>
        <p className='fs-3 fw-medium text-center' style={{}}>
          Your All-In-One Experience
        </p>
      </div>

      <div>
        <img src="pic" alt="" />
      </div>

      <div className='mt-5 mb-4 py-2' style={{ backgrounColor: '#D9C0C1' }}>
        <p className='fs-3 fw-medium text-center'>
          Are you a First-Timer...?&#160;
        </p>
      </div>

      <div className='py-2 fw-medium text-center'>

        <a className='fs-2' href="SignUp" style={{ color: 'white' }}>Sign Up Here</a>

        <div className='my-3 fs-3'>
          Or
        </div>

        <a className='fs-2' href="Login" style={{ color: 'white' }}>Login Here</a>

      </div>

    </div>
  )
}

export default Home;