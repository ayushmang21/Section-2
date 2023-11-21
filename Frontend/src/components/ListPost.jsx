import React, { useState } from 'react'
import postData from './postData'

const ListPost = () => {

    const [postArray, setpostArray] = useState(postData);

    const addLike = (index) => {
        const temp = postArray;
        temp[index].like++;
        setpostArray([...temp]);
    }

  return (
    <div>
        <div className='col-md-6 mx-auto mt-5'>

            {
                postData.map( (post, index) => {return <div className='card mb-4'>
                    <div className='card-header'>
                        <h4 className='m-0'>{post.author}</h4>
                        <p className='m-0'>
                            {post.postedOn.toLocaleDateString(undefined, {day:'numeric', month:'long', year: 'numeric'})}
                            &nbsp;{post.postedOn.toLocaleTimeString()}
                        </p>
                    </div>
                    <div className='card-body'>
                        <p>{post.content}</p>
                    </div>

                    <img className='img-fluid' src={post.image} alt="" />

                    <div className='p-3'>
                        <span>{post.like} Likes</span>&nbsp; &middot; &nbsp;
                        <span>{post.comment} Comments</span>&nbsp;&middot; &nbsp;
                        <span>{post.share} Share</span>&nbsp; 
                    </div>

                    <div className='card-footer'>
                        <div className='row'>
                            <div className='col-4'>
                                <button className='btn btn-outline-dark w-100 rounded-pill' > <i class="bi bi-hand-thumbs-up-fill"></i> Like</button>
                            </div>
                            <div className='col-4'>
                                <button className='btn btn-outline-dark w-100 rounded-pill'> <i class="bi bi-chat-fill"></i> Comment</button>
                            </div>
                            <div className='col-4'>
                                <button className='btn btn-outline-dark w-100 rounded-pill'> <i class="bi bi-share-fill"></i> Share</button>
                            </div>
                        </div>
                    </div>

                </div>})
            }

        </div>
    </div>
  )
}

export default ListPost;