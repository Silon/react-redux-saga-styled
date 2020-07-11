import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import sagas from "./sagas";
import createRootReducer from "./reducers";

export const history = createBrowserHistory()

export default function configureStore(preloadedState = {}) {

  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
        thunkMiddleware,
      )
    )
  )
  sagaMiddleware.run(sagas)

  return store
}