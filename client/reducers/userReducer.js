import * as types from '../constants/actionTypes';
import { debug } from 'util';

const initialState = {
  loginError: '',
  signupError: '',
  isLoggedIn: false,
  email: '',
  fullName: '',
  password: '',
  username: '',
  userInfo: {},
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.LOGIN:
      return {
        ...state,
        userInfo: action.payload.user,
        currentMatch: action.payload.currentMatch,
        pastMatches: action.payload.pastMatches,
        isLoggedIn: true,
        email: '',
        password: '',
      }

    case types.LOGIN_FAILED:
      return {
        ...state,
        loginError: action.payload,
      }
    
    case types.SIGNUP_FAILED:
      return {
        ...state,
        signupError: action.payload,
      }

    case types.ENTER_EMAIL:
      return {
        ...state,
        email: action.payload,
      }

    case types.ENTER_FULLNAME:
      return {
        ...state,
        fullName: action.payload,
      }

    case types.ENTER_PASSWORD:
      return {
        ...state,
        password: action.payload,
      }

    case types.ENTER_USERNAME:
      return {
        ...state,
        username: action.payload,
      }

    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      }

    default:
      return state;
  }
}

export default userReducer;