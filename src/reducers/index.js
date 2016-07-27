import { combineReducers } from 'redux'

import {
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE
} from '../actions'

export function isLoading (state = false, action) {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return true
    case LOG_IN_SUCCESS:
    case LOG_IN_FAILURE:
      return false
    default:
      return state
  }
}

export function profile (state = {}, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return action.profile
    case LOG_IN_FAILURE:
    default:
      return state
  }
}

const rootReducer = combineReducers({isLoading, profile})

export default rootReducer
