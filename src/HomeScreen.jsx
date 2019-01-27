import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import logo from './logo.svg';

class HomeScreen extends Component {
  render() {
    return (
      <div className="HomeScreen">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to INSERTAPPNAME
          </p>
          <p>
            <Button class = "singlePerson" bsStyle = "primary">1 person</Button>
          </p>
          <p>
            <Button class = "groupMode" bsStyle = "primary">Group Mode</Button>
          </p>
      </header>
      </div>
    );
  }
}

export default HomeScreen;
