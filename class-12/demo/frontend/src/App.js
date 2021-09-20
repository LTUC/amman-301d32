import React, { Component } from 'react'
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Nav from './components/Nav';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/first">
            <FirstComponent />
          </Route>
          <Route path="/second">
            <SecondComponent />
          </Route>
        </Switch>
      </Router>

    )
  }
}

export default App
