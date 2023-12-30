const initialState = {
  name: "",
  email: "",
  age: null,
  profilePhoto: null,
  uid: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
        profilePhoto: action.payload.profilePhoto,
        uid: action.payload.uid,
      };
    case "CLEAR_USER":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
