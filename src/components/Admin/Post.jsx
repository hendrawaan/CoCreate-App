import React from 'react'

const Post = (props) => {
    return (
        <div className="post">
            <div className="content">
                <h1 className="title">{props.title}</h1>
                <h2 className="desc">{props.desc}</h2>
            </div>
        </div>
    )
}
export default Post;

