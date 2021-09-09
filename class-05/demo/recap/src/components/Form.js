import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <form>
                <select onChange={this.props.handleChange}>
                    <option value="0">select background</option>
                    <option value="1">Civil Engineer</option>
                    <option value="2">Software Engineer</option>
                    <option value="3">Telecom Engineer</option>
                </select>
            </form>
        )
    }
}

export default Form
