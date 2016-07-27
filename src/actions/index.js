import solid from 'solid-client'

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export function logIn () {
  return function (dispatch) {
    dispatch(logInRequest())
    return solid.login()
      .then(webId => solid.getProfile(webId))
      .then(profile => dispatch(logInSuccess(profile)))
      .catch(error => dispatch(logInFailure(error)))
  }
}

export function logInRequest () {
  return { type: LOG_IN_REQUEST }
}

export function logInSuccess (profile) {
  return {
    type: LOG_IN_SUCCESS,
    profile: profile
  }
}

export function logInFailure (error) {
  return {
    type: LOG_IN_FAILURE,
    error: error
  }
}
