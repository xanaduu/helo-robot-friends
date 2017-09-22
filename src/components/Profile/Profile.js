import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFirstName, updateLastName, updateGender, updateHairColor, updateEyeColor, updateHobby, updateBirthDay, updateBirthMonth, updateBirthYear } from '../../ducks/reducer';

class Profile extends Component {
    render() {
        return(
            <div> Profile </div>
        )
    }




};

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

export default connect(mapStateToProps, { updateFirstName, updateLastName, updateGender, updateHairColor, updateEyeColor, updateHobby, updateBirthDay, updateBirthMonth, updateBirthYear })(Profile);