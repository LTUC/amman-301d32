import React, { Component } from 'react';
import UserData from './UserData';


// props is an object inherited from the react Component class
// it is used to pass data/ hold a set of data and pass it from one component to another
/* 
props={

}
class Component{
    constructor(props){
        this.props={}
    }
}
*/
class Main extends Component {
    render() {
        let users=[{userName:"Yahia",age:30},{userName:"Dima",age:24},{userName:"Yaseen",age:23}]
        return (
                <>
                    <h1>I' the main component</h1>
                    {
                        users.map(element=>{
                            return <UserData name={element.userName} age={element.age}/>
                        })
                    }
                    
                </>
        )
    }
}

export default Main
