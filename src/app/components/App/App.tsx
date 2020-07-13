import React, { useEffect, useState } from 'react'
import { Route, Switch, RouteProps } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { firebasaeUserIsAuthenticated } from '../../store/firebaseUser/selectors'
import { firebaseAuthenticateRequest } from '../../store/firebaseUser/actions'
import { privateRoutes, publicRoutes } from '../../routes/routes'

const RouteWithSubRoutes = (route: any) => {
  const routeRender = (props: any) => <route.component {...props} routes={route.routes} />
  return <Route path={route.path} render={routeRender} />
}

const Routes = ({ routes }: { routes: RouteProps[] }) => (
  <Switch>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
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
  if (isAuthenticated) return <Routes routes={privateRoutes} />
  return <Routes routes={publicRoutes} />
}

export default App
