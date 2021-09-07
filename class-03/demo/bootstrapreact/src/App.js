import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import NavBarCustom from './components/NavBarCustom';
import BsModal from './components/BsModal';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
        showModal:false,
        name:"",
        title:""
    }
}
  handleClose=()=>{
    this.setState({
      showModal:false
    })
  }
  handleOpen=(name, title)=>{
    this.setState({
      showModal:true,
      name:name,
      title:title

    })
  }
  render() {
    return (
      <>
      <NavBarCustom/>
        <Main handleOpen={this.handleOpen}/>

        <BsModal handleClose={this.handleClose} 
                showModal={this.state.showModal} 
                name={this.state.name} 
                title={this.state.title} 
        />
      </>
    )
  }
}

export default App
