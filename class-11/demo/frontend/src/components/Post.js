import React, { Component } from 'react'

class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <br />
                <p>{this.props.body}</p>
                <hr />
            </div>
        )
    }
}

export default Post
