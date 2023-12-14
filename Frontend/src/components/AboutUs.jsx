import React from 'react'
import './aboutus.css'

const AboutUs = () => {
  return (
    <div className='container body' style={{fontFamily:'Montserrat'}}>

        <div className='my-5 display-1 fw-medium'>
            <p>Our Story</p>
        </div>
        
        {/* <div className='container my-5 display-5 fw-medium'>
            <p>Our Story</p>
        </div> */}

        <div className='story w-75 mx-auto my-5 fw-medium'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui pariatur rerum fugit eveniet quae, fuga neque eos consequuntur earum veritatis quisquam cum. Eaque nemo repellat uferhvij Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, reprehenderit? urhiifvherfj h frhnwief hq3 hfr3q n frjw fhjle irfhj nn frnw fhjlw rg f   jo ftg  gj  le rr fj frjawe fj;ewirvj lair jlei fja ue hfgenjvinvnv j  ij lij glijer tg   fugiat fugit distinctio nesciunt. Repudiandae.</p>
        </div>

        <div className='my-5'>

            <img className='founder' 
            src="https://images.pexels.com/photos/18399715/pexels-photo-18399715/free-photo-of-blonde-in-cap-and-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Not Found" />

            <h2 className='mt-4'>Alice Blake</h2>

            <h5>Founder, CEO</h5>

        </div>

    </div>
  )
}

export default AboutUs;