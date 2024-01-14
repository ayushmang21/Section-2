import React, { useState } from "react";
import postData from "./postData";

const ListPost = () => {
    const [postArray, setpostArray] = useState(postData);
    const [Cmmt, setCmmt] = useState([]);

    const addLike = (index) => {
        const temp = postArray;
        temp[index].like++;
        setpostArray([...temp]);
    };

    const addCmmt = (index) => {
        if (index.code == "Enter") {
            console.log(index.target.value);

            setCmmt([index.target.value, ...Cmmt]);
            console.log([index.target.value, ...Cmmt]);

            index.target.value = "";
        }
    };

    const addShare = (index) => {
        const temp = postArray;
        temp[index].share++;
        setpostArray([...temp]);
    };

    return (
        <div>
            <div className="col-md-6 mx-auto mt-5">
                {postData.map((post, index) => {
                    return (
                        <div className="card mb-4">
                            
                            <div className="card-header">
                                <h4 className="m-0">{post.author}</h4>
                                <p className="m-0">
                                    {post.postedOn.toLocaleDateString(undefined, {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                    &nbsp;{post.postedOn.toLocaleTimeString()}
                                </p>
                            </div>

                            <div className="card-body">
                                <p>{post.content}</p>
                            </div>

                            <img className="img-fluid" src={post.image} alt="" />

                            <div className="p-3">
                                <span>{post.like} Likes</span>&nbsp; &middot; &nbsp;
                                <span>{Cmmt.length} Comments</span>&nbsp;&middot; &nbsp;
                                <span>{post.share} Share</span>&nbsp;
                            </div>

                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-4">
                                        <button
                                            className="btn btn-outline-dark w-100 rounded-pill"
                                            onClick={() => addLike(index)}
                                        >
                                            {" "}
                                            <i class="bi bi-hand-thumbs-up-fill"></i> Like
                                        </button>
                                    </div>
                                    <div className="col-4">
                                        <button
                                            className="btn btn-outline-dark w-100 rounded-pill"
                                            on
                                        >
                                            {" "}
                                            <i class="bi bi-chat-fill"></i> Comment
                                        </button>
                                    </div>
                                    <div className="col-4">
                                        <button
                                            className="btn btn-outline-dark w-100 rounded-pill"
                                            onClick={() => addShare(index)}
                                        >
                                            {" "}
                                            <i class="bi bi-share-fill"></i> Share
                                        </button>
                                    </div>
                                </div>

                                <input
                                    type="text"
                                    onKeyDown={addCmmt}
                                    className="form-control my-3 border-dark-subtle"
                                    placeholder="Add a comment..."
                                />
                                {Cmmt.map((cmt) => {
                                    return (
                                        <div className="d-flex justify-content-between align-items-center ms-2">
                                            {" "}
                                            <p>{cmt}</p>{" "}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListPost;
