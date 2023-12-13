import React from 'react'
import './contactus.css'

const ContactUs = () => {
  return (
    <div className='b'>

      <div className="myform my-5 rounded-2">

        <h3 className="form-title">Contact Us</h3>

          <form action="contact form.html">

            <label>Your Name</label>
            <input type="text" className="myinput rounded-2" />

            <label>Your Email</label>
            <input type="text" className="myinput rounded-2" />

            <label>How can we help you ?</label>
            <textarea className="help rounded-2" cols={30} rows={7}/>

            <div>
              <button className="mybtn btnhov">Submit</button>
            </div>
            
          </form>

      </div>


    </div>
  )
}

export default ContactUs;