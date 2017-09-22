import React, { Component } from 'react';
<<<<<<< HEAD
import './Dashboard.css';
// import home from '../../home.png'
=======
import dashboard from './Dashboard.css';
import home from '../../home.png';
import friends from '../../robots';
>>>>>>> b4268066b3e70f03dcc5e2d507f8fe8d640970c6

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      currentPage: 1,
      friendsPerPage: 24
    };
    this.handleClick = this.handleClick.bind( this );
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  
  render() {
    const { friends, currentPage, friendsPerPage } = this.state;
    const indexOfLastFriend = currentPage * friendsPerPage;
    const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
    const currentFriends = friends.slice(indexOfFirstFriend, indexOfLastFriend);

    const renderFriends = currentFriends.map( (friend, index) => {
      return <li key={index}>{ friend }</li>;
    });

    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(friends.length / friendsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          >
            {number}
        </li>
      );
    });


    return (
      <div>
          <ul>
            <li><a href="#title" className="Helo">Helo</a></li>
            <li><a href="#home" className="Home-Icon"></a></li>
            <li><a href="#search" className="Search-Icon"></a></li>
          </ul>
          <div className="Background-Dash"> </div>
          <div>
            <ul> { renderFriends } </ul>
            <ul id="page-numbers" > { renderPageNumbers } </ul>
          </div>
      </div>
    );
  }
}

export default Dashboard;