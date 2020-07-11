import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../../pages/Login'
import DashboardPage from '../../pages/Dashboard'
import { useSelector, useDispatch } from 'react-redux'
import { firebasaeUserIsAuthenticated } from '../../store/firebaseUser/selectors'
import { firebaseAuthenticateRequest } from '../../store/firebaseUser/actions'

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={DashboardPage} />
  </Switch>
)

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const isAuthenticated = useSelector(firebasaeUserIsAuthenticated)

  useEffect(() => {
    dispatch(firebaseAuthenticateRequest())
  }, [])

  useEffect(() => {
    if (typeof isAuthenticated !== 'undefined') {
      setLoading(false)
    }
  }, [isAuthenticated])

  if (loading) return <div>LOADING</div>
  if (isAuthenticated) return <Routes />
  return <Route exact={true} path="/login" component={LoginPage} />
}

export default App
