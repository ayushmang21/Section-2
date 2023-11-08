import React from 'react'
import './contactus.css'

const ContactUs = () => {
  return (
    <div className='b'>

      <div className="myform my-5">

        <h3 className="form-title">Contact Us</h3>

          <form action="contact form.html">

            <label>Your Name</label>
            <input type="text" className="myinput" required="" />

            <label>Your Email</label>
            <input type="text" className="myinput" required="" />

            <label>How can we help you ?</label>
            <textarea className="help" cols={30} rows={7} required="" defaultValue={""}/>

            <div>
              <button className="mybtn btnhov">Submit</button>
            </div>
            
          </form>

      </div>


    </div>
  )
}

export default ContactUs;