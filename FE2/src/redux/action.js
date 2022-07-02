/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/**
 * async action
 * sysc action
 */
import { AUTH_SUCCESS, ERROR_MSG } from "./action-type";

import { reqRegister, reqLogin } from "../api";

//
const authSuccess = (user) => ({ type: AUTH_SUCCESS, data: user });
// display the error message
const errorMsg = (msg) => ({ type: ERROR_MSG, data: msg });

// register aysc action
export const register = (user) => {
  const { username, password, password2, type } = user;
  if (!username) {
    return errorMsg("username must be specified!");
  }
  if (password !== password2) {
    return errorMsg("The password must be the same!");
  }

  return async (dispatch) => {
    // send register aysc ajax request
    const response = await reqRegister(user);
    const result = response.data;
    if (result.code === 0) {
      // dispatch success action
      dispatch(authSuccess(result.data));
    } else {
      // dispatch error action
      dispatch(errorMsg(result.msg));
    }
  };
};

export const signIn = (user) => {
  const { username, password } = user;
  if (!username) {
    return errorMsg("username must be specified!");
  }
  if (!password) {
    return errorMsg("The password need be specified!");
  }
  return async (dispatch) => {
    // send register aysc ajax request
    const response = await reqLogin(user);
    const result = response.data;
    // eslint-disable-next-line no-empty
    if (result.code === 0) {
    } else {
    }
  };
};
