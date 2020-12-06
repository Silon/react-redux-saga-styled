import { applyMiddleware, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import createRootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import sagas from './sagas'
import thunkMiddleware from 'redux-thunk'

export const history = createBrowserHistory()

export default function configureStore(preloadedState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  })

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware, thunkMiddleware))
  )
  sagaMiddleware.run(sagas)

  return store
}
