import React from 'react'

const Login = () => {
  return (
    <div style={{fontFamily: 'Montserrat'}}>
        <div className='container text-start mt-5'>
          <div className='row'>
              <div className='col'>
                <div className='card display-1 border-0'>
                  <div className='card-body bg-warning'>
                      Welcome
                      <br />
                      Back!
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card border-0'>
                  <div className='card-body'>
                    <h2 className='my-3'>Login</h2>

                    <p className='my-4'>Welcome Back! Please login to your <br /> account.</p>

                    <label className='mt-3 fw-normal'>User Name or Email</label>
                    <input type="email" className='form-control mt-2'/>

                    <label className='mt-3 fw-normal'>Password</label>
                    <input type="password" className='form-control mt-2'/>

                    <button className='btn w-100 mt-5 mb-5' style={{backgroundColor: '#5627CC', color:'white'}}>Login</button>

                    <p>New User ? <a href="SignUp">Signup</a></p>

                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Login;