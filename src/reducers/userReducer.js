const initialState = {
  name: '',
  email: '',
  age: null,
  profilePhoto: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
        profilePhoto: action.payload.profilePhoto,
      };
    case 'CLEAR_USER':
      return initialState;
    default:
      return state;
  }
};

export default userReducer;  