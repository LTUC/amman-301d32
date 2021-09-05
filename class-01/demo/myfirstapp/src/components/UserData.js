import React, { Component } from 'react'

class UserData extends Component {
    render() {
        return (
            <div>
                <h4>name: {this.props.name}</h4>
                <h4>age:{this.props.age} years</h4>
            </div>
        )
    }
}

export default UserData
