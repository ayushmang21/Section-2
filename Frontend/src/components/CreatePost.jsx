import React from 'react'

const CreatePost = () => {
    return (
        <div style={{ fontFamily: 'Montserrat' }}>
            <div className='col-md-6 mx-auto'>
                <div className='container mt-4 '>
                    <div className='card border-3 border-dark '>
                        <div className='card-body m-4'>


                            <label htmlFor="content" className='mb-3 fs-3'>Content</label>
                            <textarea className='form-control border-2 border-dark' name="" id="" cols="30" rows="7"></textarea>

                            <label htmlFor="photo" className='my-3 fs-3'>Image</label>
                            <input className='form-control border-2 border-dark' type="text" />

                            <button className='btn w-75 mt-5' style={{ backgroundColor: '#5627CC', color: 'white' }}>Create</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;