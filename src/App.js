import React, { Component } from 'react';
import './App.css';
import logo from './icon.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to our Project</h2>
        </div>
        <p className="App-intro">
          Hi guys
        </p>
      </div>
    );
  }
}

export default App;
