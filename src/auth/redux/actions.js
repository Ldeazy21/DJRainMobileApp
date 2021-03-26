import { LOGIN_REQUEST } from "./actionTypes";

export const loginRequest = ({email, password}) => ({
  type: LOGIN_REQUEST,
  payload: {
    email,
    password
  }
});
