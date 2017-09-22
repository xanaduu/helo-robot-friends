import React, { Component } from 'react';
import dashboard from './Dashboard.css';
import home from '../../home.png';
import friends from '../../robots';
import { connect } from 'react-redux';
import { updateFirstName, updateLastName, updateGender, updateHairColor, updateEyeColor, updateHobby, updateBirthDay, updateBirthMonth, updateBirthYear } from '../../ducks/reducer';


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
    console.log(friends);
    const { friends, currentPage, friendsPerPage } = this.state;
    const { firstName, lastName, gender, birthDay, birthMonth, birthYear } = this.props;
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

function mapStateToProps( state ) {
  return {
      firstName: state.firstName,
      lastName: state.lastName,
      gender: state.gender,
      hairColor: state.hairColor,
      eyeColor: state.eyeColor,
      hobby: state.hobby,
      birthDay: state.birthDay,
      birthMonth: state.birthMonth,
      birthYear: state.birthYear
  }
};

export default connect(mapStateToProps, { updateFirstName, updateLastName, updateGender, updateHairColor, updateEyeColor, updateHobby, updateBirthDay, updateBirthMonth, updateBirthYear })(Dashboard);