import React, { Component } from 'react';
import './HomeScreen.css';

class HomeScreen extends Component {
  render() {
    return (
      <div className="HomeScreen">
          <form className = "location" action = "/Single" method = "POST">
            <label className = "label"><b>
              Enter a location: </b><br/>
              <input type="text" name="name" />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default HomeScreen;
