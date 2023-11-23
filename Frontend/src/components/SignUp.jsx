import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5,'Too Short!')
    .required('Required')
});

const SignUp = () => {

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values));
      console.log(values);
      resetForm();
      toast.success('Form Submitted Successfully');
    }
  });



  return (
    <div style={{ fontFamily: 'Montserrat' }}>
      <div className='container text-start mt-5'>
        <div className='row'>
          <div className='col d-flex align-items-center' style={{backgroundColor: '#5627CC', color: 'white'}}>
            <div className='card display-1 border-0 '>
              <div className='card-body bg-warning'>
                Welcome
                <br />
                Back!
              </div>
            </div>
          </div>
          <div className='col'>

            <div className="card">
              <div className="card-body">
                <h3 className='my-3 text-center'>Brand Logo</h3>
                <h5 className='text-center text-muted'>Signup Form</h5>

                <form onSubmit={signupForm.handleSubmit}>

                  <label htmlFor="name">Name</label>
                  <input type="text" id='name' onChange={signupForm.handleChange} value={signupForm.values.name} className='form-control mb-4' />

                  <label htmlFor="email">Email Address</label>
                  <input type="text" id='email' onChange={signupForm.handleChange} value={signupForm.values.email} className='form-control mb-4' />

                  <label htmlFor="password">Password</label>
                  <input type="password" id='password' onChange={signupForm.handleChange} value={signupForm.values.password} className='form-control mb-4' />

                  <button type='submit' className='btn btn-primary w-100 my-4'>Submit</button>

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;