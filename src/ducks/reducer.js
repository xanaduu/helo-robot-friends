const initialState = {
    firstName: "",
    lastName: "",
    gender: "",
    hairColor: "",
    eyeColor: "",
    hobby: "",
    birthDay: 0,
    birthMonth: 0,
    birthYear: 0
};

const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_GENDER = 'UPDATE_GENDER';
const UPDATE_HAIR_COLOR = 'UPDATE_HAIR_COLOR';
const UPDATE_EYE_COLOR = 'UPDATE_EYE_COLOR';
const UPDATE_HOBBY = 'UPDATE_HOBBY';
const UPDATE_BIRTH_DAY = 'UPDATE_BIRTH_DAY';
const UPDATE_BIRTH_MONTH = 'UPDATE_BIRTH_MONTH';
const UPDATE_BIRTH_YEAR = 'UPDATE_BIRTH_YEAR';

function reducer( state=initialState, action ) {
    console.log('REDUCER HIT: Action ->', action);

    switch (action.type) {
        case UPDATE_FIRST_NAME:
          return Object.assign( {}, state, {firstName: action.payload} );

        case UPDATE_LAST_NAME:
          return Object.assign( {}, state, {lastName: action.payload} );

        case UPDATE_GENDER:
          return Object.assign( {}, state, {gender: action.payload} );

        case UPDATE_HAIR_COLOR:
          return Object.assign( {}, state, {hairColor: action.payload} );

        case UPDATE_EYE_COLOR:
          return Object.assign( {}, state, {eyeColor: action.payload} );

        case UPDATE_HOBBY:
          return Object.assign( {}, state, {hobby: action.payload} );
        
        case UPDATE_BIRTH_DAY:
          return Object.assign( {}, state, {birthDay: action.payload} );

        case UPDATE_BIRTH_MONTH:
          return Object.assign( {}, state, {birthMonth: action.payload} );

        case UPDATE_BIRTH_YEAR:
          return Object.assign( {}, state, {birthYear: action.payload} );

        default:
          return state;
    }
};

export function updateFirstName( firstName ) {
    return {
        type: UPDATE_FIRST_NAME,
        payload: firstName
    };
};

export function updateLastName( lastName ) {
    return {
        type: UPDATE_LAST_NAME,
        payload: lastName
    };
};

export function updateGender( gender ) {
    return {
        type: UPDATE_GENDER,
        payload: gender
    };
};

export function updateHairColor( hairColor ) {
    return {
        type: UPDATE_HAIR_COLOR,
        payload: hairColor
    };
};

export function updateEyeColor( eyeColor ) {
    return {
        type: UPDATE_EYE_COLOR,
        payload: eyeColor
    };
};

export function updateHobby( hobby ) {
    return {
        type: UPDATE_HOBBY,
        payload: hobby
    };
};

export function updateBirthDay( birthDay ) {
    return {
        type: UPDATE_BIRTH_DAY,
        payload: birthDay
    };
};

export function updateBirthMonth( birthMonth ) {
    return {
        type: UPDATE_BIRTH_MONTH,
        payload: birthMonth
    };
};

export function updateBirthYear( birthYear ) {
    return {
        type: UPDATE_BIRTH_YEAR,
        payload: birthYear
    };
};

export default reducer;