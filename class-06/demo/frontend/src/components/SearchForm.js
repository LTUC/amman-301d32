import React, { Component } from 'react'

export class SearchForm extends Component {


    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input  type="text" 
                            placeholder="Please enter a city name..."
                            onChange={this.props.handleLocation}
                            />
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

export default SearchForm
