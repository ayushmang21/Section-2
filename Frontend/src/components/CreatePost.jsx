import React from 'react'

const CreatePost = () => {
  return (
    <div>
        <div className='container mt-5 '>
            <div className='card border-3 border-dark'>
                <div className='card-body my-4'>
                    
                    <div className=''> 
                        <label htmlFor="content" className='mb-3 fs-3'>Content</label>
                        <textarea className='form-control border-2 border-dark' name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className=''>
                        <label htmlFor="photo" className='my-3 fs-3'>Image</label>
                        <input className='form-control border-2 border-dark' type="text" />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost;