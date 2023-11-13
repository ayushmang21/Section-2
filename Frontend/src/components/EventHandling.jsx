import React from 'react'

const EventHandling = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Event Handling</h1>
      <hr />

      <button className='btn btn-primary' onClick={ () => {prompt('Nice alert!!')} }>My Button</button>

      <input type="text" className='form-control mt-4' onChange={ (event) => { console.log(event.target.value); } }/>

      <input type="color" onChange={ (e) => { document.body.style.backgroundColor = e.target.value; } } />

      


    </div>
  )
}

export default EventHandling;