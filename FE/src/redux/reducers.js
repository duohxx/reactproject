/**
 * include many reducer function
 * according old state and the specific action to return a new state
 */

import {combineReducers} from 'redux'

import {
    AUTH_SUCCESS,
    ERROR_MSG
} from './action-type'

const initUser = {
    username: '',
    type: '',
    msg: '',  // save the error information
    redirectTo: ''
}

// 产生user状态的reducer
function user(state=initUser, action) {
    switch (action.type) {
      case AUTH_SUCCESS: // data是user
        return { ...action.data, redirectTo: '/' }
      case ERROR_MSG: // data是msg
        return {...state, msg: action.data}
      default:
        return state
    }
  }
  


export default combineReducers({
    user
})