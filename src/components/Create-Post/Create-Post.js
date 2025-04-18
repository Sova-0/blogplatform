import React from "react";

import './Create-Post.css';
const CreatePost = () => {
    return (
        <form className="create-post">
            <div className="create-post__title">Create new article</div>
            <div className="create-post__info">
                <div className="create-post__info-title">
                    Title
                    <input type="text" placeholder="Title" />
                </div>
                <div className="create-post__short-description">
                    Short description
                    <textarea type="text" placeholder="Title" />
                </div>
                <div className="create-post__text">
                    Text
                    <textarea type="text" placeholder="Text" />
                </div>
                <div className="create-post__tags">
                    Tags
                    <div className="create-post__tags-list"></div>
                </div>
                <button type="submit" className="create-post-send-button">Send</button>
            </div>
        </form>
    )
}

export default CreatePost;