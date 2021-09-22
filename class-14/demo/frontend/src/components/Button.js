import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <button onClick={this.props.callApi}>
                call AUTH api               
            </button>
        )
    }
}

export default Button
