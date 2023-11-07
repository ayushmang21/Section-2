import React from 'react'
import './contactus.css'

const ContactUs = () => {
  return (
    <div className='b'>

        <div className='head'>
          <p>Contact Us</p>
        </div>

        <div className='container cont'>

          <form action="">

            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder='Enter Name' className='myinput' required/>

            <label htmlFor="mail">Your Email</label>
            <input type="email" placeholder='Enter Email' className='myinput' required/>

            <label htmlFor="help">How can we help you ?</label>
            <textarea className="help" placeholder='Write here...' cols="30" rows="10" required></textarea>

            <div>
              <button type="submit" className='btn'>Submit</button>
            </div>

          </form>

        </div>

    </div>
  )
}

export default ContactUs;