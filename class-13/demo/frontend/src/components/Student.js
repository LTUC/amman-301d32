import React, { Component } from 'react'

class Student extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.username}</h1>
                <h1>{this.props.email}</h1>
                <button onClick={()=>{this.props.handleDelete(this.props.id)}}>Delete</button>
                <button onClick={()=>{this.props.handleUpdate(this.props.id,this.props.username, this.props.email)}}>Update</button>
            </div>
        )
    }
}

export default Student
