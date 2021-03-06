import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {Route, NavLink, HashRouter, Switch} from "react-router-dom";
import Single from "./Single.jsx";
import Group from "./Group.jsx";
import HomeScreen from "./HomeScreen.jsx";
import './App.css';

class App extends Component {

  render() {

    return (
      <HashRouter>
      <div>
        <Navbar secondary fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <NavLink to = "/">Home</NavLink>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem className = "single"><NavLink font to = "/Single">Single</NavLink></NavItem>
              <NavItem className = "group"><NavLink to = "/Group">Group</NavLink></NavItem>
            </Nav>
        </Navbar>
            <Switch>
                <Route exact path="/" component={HomeScreen}/>
                <Route path="/Single" component={Single}/>
                <Route path="/Group" component={Group}/>
            </Switch>
          </div>
        </HashRouter>
    );
  }

}

export default App;
