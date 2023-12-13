import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5,'Too Short!')
    .required('Required')
    .matches(/[0-9]/, 'Number is Required')
    .matches(/[a-z]/, 'LowerCase is Required')
    .matches(/[A-Z]/, 'UpperCase is Required')
    .matches(/[^\w]/, 'UpperCase is Required')
});

const Login = () => {

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values));
      console.log(values);
      resetForm();
      toast.success('Form Submitted Successfully');
    },
    validationSchema: LoginSchema
  });

  return (
    <div style={{fontFamily: 'Montserrat'}}>
        <div className='container text-start my-5' style={{height: '100vh'}}>
          <div className='row my-5'>
              <div className='col d-flex align-items-center justify-content-center' style={{backgroundColor: '#391b7f',}}>
                <div className='card display-1 border-0'>
                  <div className='card-body text-white' style={{backgroundColor: '#391b7f',}}>
                      Welcome
                      <br />
                      Back !!
                  </div>
                </div>
              </div>
              <div className='col' style={{backgroundColor: '#d9c0c1'}}>
                <div className='card border-0' style={{backgroundColor: '#d9c0c1'}}>
                  <div className='card-body' >
                    <h2 className='my-3 text-center display-5 fw-bold'>Login</h2>

                    <p className='my-4 text-center fw-medium'>Welcome Back! Please login to your account.</p>

                    <form onSubmit={loginForm.handleSubmit}>

                    <label className='mt-3 fw-medium'>Email</label>
                    <span className='text-danger ms-3'>{loginForm.touched.email && loginForm.errors.email}</span>
                    <input type="text" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='form-control mt-2' style={{borderWidth:'2px' ,borderColor: '#391b7f'}}/>

                    <label className='mt-3 fw-medium'>Password</label>
                    <span className='text-danger ms-3'>{loginForm.touched.password && loginForm.errors.password}</span>
                    <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='form-control mt-2' style={{borderWidth:'2px' ,borderColor: '#391b7f'}}/>

                    <button className='btn w-100 mt-5 mb-5 fw-medium' style={{backgroundColor: '#391b7f', color:'white'}}>Login</button>

                    </form>

                    <p className='fw-medium'>New User ? <a href="SignUp" style={{color:'#391b7f'}}>Signup</a></p>

                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Login;