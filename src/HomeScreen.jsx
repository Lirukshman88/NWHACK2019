import React, { Component } from 'react';
import './HomeScreen.css';

class HomeScreen extends Component {
  render() {
    return (
      <div className = "bigContainer">
        <div className="HomeScreen">
          <p className = "welcome">
            Rinder
          </p>
            <form className = "location" action = "/Single" method = "POST">
              <label className = "label"><b>
                Enter a location: </b><br/>
                <input type="text" name="name" />
              </label>
              <br/>
              <input className = "submit" type="submit" value="Submit" />
            </form>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
