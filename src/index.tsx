import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './app/components/App/App'
import ResetStyle from './app/styles/reset'
import FontsStyle from './app/styles/fonts'
import GlobalStyle from './app/styles/global'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './app/store/store'

const store = configureStore({})

ReactDOM.render(
  <React.StrictMode>
    <ResetStyle />
    <FontsStyle />
    <GlobalStyle />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
