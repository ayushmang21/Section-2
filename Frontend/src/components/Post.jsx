import React, { useState } from 'react'

const Post = () => {

    const [Likes, setLikes] = useState(0);

    const [Cmmt, setCmmt] = useState([]);

    const addCmt = (e) => {
        if(e.code =='Enter'){
            console.log(e.target.value);

            setCmmt([e.target.value , ...Cmmt ]);
            console.log([e.target.value , ...Cmmt ]);

            e.target.value ="";
        }
    }

  return (
    <div style={{fontFamily: 'Montserrat'}}>

        <div className='container d-flex justify-content-center'>

            <div className='card my-5 w-50 border-dark'>

            {/* head */}
                <div className='card-header d-flex justify-content-between align-items-center border-dark-subtle'>
                    <div className='d-inline-flex align-items-center'>
                        <img src="https://fiorecommunications.com/wp-content/uploads/2019/05/instagram-blog-person-icon-600x600.jpg"
                        height={40} alt="" 
                        className='rounded-circle' />
                        <p className='ms-2 fw-medium fs-5'>Lorem ipsum <br /> <p className='fw-normal fs-6'>Lorem ipsum, dolor</p> </p>
                    </div>
                    <div>
                        <p className='fw-bold fs-3'>⁝</p>
                    </div>
                </div>

            {/* body */}
                <div className='card-body d-flex justify-content-center align-items-center'>
                    <div>
                        <img src="https://images.pexels.com/photos/4104772/pexels-photo-4104772.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                         alt="" className='' style={{}} />
                    </div>
                </div>

            {/* foot */}
                <div className='card-footer border-dark-subtle'>
                    <div className='my-2'>
                        <button className='btn btn-danger fs-5' onClick={ () => {setLikes(Likes+1);}} >❤</button>
                        <p className='my-3'>Liked by Lorem and {Likes} others</p>

                        <input type="text" onKeyDown={addCmt} className='form-control my-3' placeholder='Add a comment...'/>
                        {Cmmt.map((cmt) => {return <div className='d-flex justify-content-between align-items-center mt-2   '> <p>{cmt}</p> </div>})}
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Post;