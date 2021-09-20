import React, { Component } from 'react'

class Cat extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.catName}</h1>
                <h1>{this.props.owner.ownerName}</h1>
                <button onClick={()=>this.props.handleDelete(this.props.catId)}>Delete</button>
            </div>
        )
    }
}

export default Cat
