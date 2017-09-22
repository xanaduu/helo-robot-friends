import React, { Component } from 'react';
import './Login.css';
import friends from '../../robots';

export default class Login extends Component {
  render() {
    console.log(friends[1])
    return (
      <div className="App">
        <div className="Background" >
        <div className="splash-screen">
          <div className="logo-main"></div>
            <h1 className="helo">Helo</h1>
            <a href={process.env.REACT_APP_LOGIN}>
              <button className="login">Login / Register
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
