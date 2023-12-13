import React from 'react'

const Home = () => {
  return (
    <div style={{ fontFamily: 'Montserrat'}}>

      <div>
        <h1 className='my-4 text-center' style={{ fontSize: 70,}}>Welcome to <span style={{color: '#391b7f', fontFamily: 'monospace'}}>Voilet.io</span> </h1>
      </div>

      <div>
        <p className='fs-3 fw-medium text-center' style={{}}>
          Your All-In-One Experience
        </p>
      </div>

      <div className='mt-3'>
        <p className='fs-3 fw-medium text-center'>
          Are you a First-Timer here..?&#160;
          <span>
            <br />
            <a href="SignUp" style={{color: '#9F5ECF'}}>Sign Up Here</a>
            <br />
          </span>
          Or
          <span>
            <br />
            <a href="Login" style={{color: '#9F5ECF'}}> Login Here</a>
          </span>
        </p>
      </div>

    </div>
  )
}

export default Home;