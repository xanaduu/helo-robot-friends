import React, { Component } from 'react';
import dashboard from './Dashboard.css';
import home from '../../home.png'

class Dashboard extends Component {
  render() {
    return (
      <div>
          <ul>
      <li><a href="#title" className="Helo">Helo</a></li>
      <li><a href="#home" className="Home-Icon"></a></li>
      <li><a href="#search" className="Search-Icon"></a></li>
          </ul>
        <div className="Background-Dash"> </div>
      </div>
    );
  }
}

export default Dashboard;