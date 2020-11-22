
import React from "react";
import Feed from './Feed'


class PostFeed extends React.Component {
        
        state = {
            post: []
        };


componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        this.setState({
            post: json
        })
    })
}
    render() {
        return (
                <div>
                {
                    this.state.post.map(data => { 
                        return <Feed title={data.title}/> 
                    })
                }
                </div>
        );
    }
}
export default PostFeed