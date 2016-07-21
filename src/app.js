import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { logIn } from './actions'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(logIn())
