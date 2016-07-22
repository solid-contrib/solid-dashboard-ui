import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { logIn } from '../actions'
import rootReducer from '../reducers'

export default function configureStore () {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware))
}
