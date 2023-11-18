import React, { useState } from 'react'

const StateManagement = () => {

    // let count = 0;

    // a - Read-Only ; b - Update Func
    // const [a,b] =useState(0);

    // const [Likes, setLikes] = useState(0);
    const [Likes, setLikes] = useState(0);

    // const [imglink, setImglink] = useState("");

  return (
    <div className='container'>
            <h1 className='text-center'>State Management</h1>
            <hr />

            {/* <h1>{count}</h1> */}

            {/* <button className='btn btn-danger' onClick={ () => {count++; console.log(count);}}>Add 1</button> */}

            <h1>Like : {Likes}</h1>

            <button className='btn btn-primary' onClick={ () => {setLikes(Likes+1);}} > Add Like</button>

            {/* <input type="text" className='form-control mt-5' onChange={(e) => {setImglink(e.target.value)}}/>
            <label>Insert Image Link Above</label>

            {/* <h3>{imglink}</h3> */}

            {/* <img className='d-block' src={imglink} alt="" /> */}
    </div>
  )
}

export default StateManagement;