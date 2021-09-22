import React, { Component } from 'react'
import LoginButton from './components/LoginButton';
import LogoutButton  from './components/LogoutButton';
import SpecialContent from './components/SpecialContent';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Button from './components/Button';

export class App extends Component {

  callApi = () => {
    if(this.props.auth0.isAuthenticated) {
      this.props.auth0.getIdTokenClaims()
      .then(res => {
        const jwt = res.__raw;
        const config = {
          headers: {"Authorization" : `Bearer ${jwt}`},
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/auth'
        }
        axios(config)
          .then(result => console.log(result.data))
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
    }else{
      console.log("user is not authenticated")
    }
  }
  render() {
    return (
      <div>
        {
          this.props.auth0.isAuthenticated?
          <>
          <LogoutButton/>
          <h1>{this.props.auth0.user.name}</h1>
          <img src={this.props.auth0.user.picture} alt=""/>
          <SpecialContent/>
          <Button callApi={this.callApi}/>
          </>:
          <LoginButton/>
        }
        
        
      </div>
    )
  }
}

export default withAuth0(App);
