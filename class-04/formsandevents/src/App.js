import React, { Component } from 'react';
import User from './components/User';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      company: '',
      speciality: '',
      showUser:false
    }
  }
  handleUsername = (e) => {
    let username = e.target.value;
    this.setState({
      username: username
    });
    console.log(this.state.username);
  }
  handleCompany = (e) => {
    let company = e.target.value;
    this.setState({
      company: company
    });
    console.log(this.state.company);
  }
  handleSelect = (e) => {
    let speciality = e.target.value;
    this.setState({
      speciality: speciality
    });
    console.log(this.state.speciality);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showUser:true
    })
  }
  render() {
    return (
      <div>
        {/* {
          this.state.showUser ?<User username={this.state.username} 
                                      company={this.state.company} 
                                      sepciality={this.state.speciality} 
                              />:
                              ''
        } */
        this.state.showUser&&<User  username={this.state.username} 
                                    company={this.state.company} 
                                    sepciality={this.state.speciality} 
                              />
        }

        <Form handleSubmit={this.handleSubmit}
              handleCompany={this.handleCompany} 
              handleUsername={this.handleUsername} 
              handleSelect={this.handleSelect}
        />
      </div>
    )
  }
}

export default App
