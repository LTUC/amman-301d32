import React, { Component } from 'react'
import Parent from './components/Parent'

export class App extends Component {

  render() {
    return (
      <div>
        <Parent parentMoney={0}/>
      </div>
    )
  }
}

export default App
