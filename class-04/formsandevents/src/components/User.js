import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                <h1>Username: {this.props.username}</h1>
                <h2>Company: {this.props.company}</h2>
                <h2>Speciality: {this.props.sepciality}</h2>
            </div>
        )
    }
}

export default User
