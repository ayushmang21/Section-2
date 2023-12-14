import React from 'react'

const Home = () => {
  return (
    <div className='homepg' style={{ fontFamily: 'Montserrat' }}>

      <div style={{backgroundColr:'#D9C0C1'}} className='py-1'>
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

      <div className='my-5 py-2' style={{backgrounColor:'#D9C0C1'}}>
        <p className='fs-3 fw-medium text-center'>
          Are you a First-Timer...?&#160;
          <span>
            <br />
            <a href="SignUp" style={{ color: 'white' }}>Sign Up Here</a>
            <br />
          </span>
          Or
          <span>
            <br />
            <a href="Login" style={{ color: 'white' }}>Login Here</a>
          </span>
        </p>
      </div>

      <div>
        
      </div>

    </div>
  )
}

export default Home;