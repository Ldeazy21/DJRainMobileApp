import { LOGIN_REQUEST } from "./actionTypes";

const initialState = {

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
