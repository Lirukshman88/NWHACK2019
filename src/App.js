import React, { Component } from 'react';
import logo from './logo.svg';
import { Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to INSERTAPPNAME
          </p>
          <p>            
            <Button class = "singlePerson" bsStyle = "primary">1 person</Button>
          </p>
          <p>
            <Button class = "groupMode" bsStyle = "primary">Group mode</Button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
