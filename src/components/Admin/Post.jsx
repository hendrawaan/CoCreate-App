import React from 'react'

const Post = (props) => {
    return (
        <div className="post">
            <div className="content">
                <h1 className="id">{props.id}</h1>
                <h2 className="name">{props.name}</h2>
            </div>
        </div>
    )
}
export default Post;

