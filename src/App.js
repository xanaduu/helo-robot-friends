import React, { Component } from 'react';
import './App.css';
//test below
import { HashRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div> 
            <Route exact path='/' component={ Login } />
            <Route path='/dashboard' component={ Dashboard } />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
