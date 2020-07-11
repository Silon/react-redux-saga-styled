// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { firebaseUserReducer } from './firebaseUser/reducer'
import { History } from 'history'

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    firebaseUser: firebaseUserReducer,
  })
export default createRootReducer
