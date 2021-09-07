import React, { Component } from 'react'
import usersData from "./data.json";
import User from "./User";

class Main extends Component {
    render() {
        return (
            <div className="row">
                {
                    usersData.map(user=>{
                        return <User 
                                    handleOpen={this.props.handleOpen} 
                                    name={user.name} 
                                    title={user.title} 
                                    age={user.age}
                                />
                    })
                }
            </div>
        )
    }
}

export default Main
