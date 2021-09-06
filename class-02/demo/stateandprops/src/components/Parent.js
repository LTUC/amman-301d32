import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props){
        super(props);
        this.state={
                stateMoney:this.props.parentMoney,
        }
    }
    raiseMoney=()=>{
        this.setState({
            parentMoney:this.state.stateMoney+1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.raiseMoney}>Give money</button>
                <Child childMoney={this.state.stateMoney}/>
            </div>
        )
    }
}

export default Parent
