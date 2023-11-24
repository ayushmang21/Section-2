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
        <div className='container text-start mt-5'>
          <div className='row'>
              <div className='col d-flex align-items-center justify-content-center' style={{backgroundColor: '#5627CC',}}>
                <div className='card display-1 border-0'>
                  <div className='card-body text-white' style={{backgroundColor: '#5627CC', }}>
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

                    <form onSubmit={loginForm.handleSubmit}>

                    <label className='mt-3 fw-normal'>Email</label>
                    <span className='text-danger ms-3'>{loginForm.touched.email && loginForm.errors.email}</span>
                    <input type="text" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='form-control mt-2'/>

                    <label className='mt-3 fw-normal'>Password</label>
                    <span className='text-danger ms-3'>{loginForm.touched.password && loginForm.errors.password}</span>
                    <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='form-control mt-2'/>

                    <button className='btn w-100 mt-5 mb-5' style={{backgroundColor: '#5627CC', color:'white'}}>Login</button>

                    </form>

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