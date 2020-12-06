import React, { useEffect, useState } from "react";
import { Route, RouteProps, Switch } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes/routes";

const RouteWithSubRoutes = (route: any) => {
  const routeRender = (props: any) => (
    <route.component {...props} routes={route.routes} />
  );
  return <Route path={route.path} render={routeRender} />;
};

const Routes = ({ routes }: { routes: RouteProps[] }) => (
  <Switch>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </Switch>
);

function App() {
  const [loading, setLoading] = useState(true);
  const isAuthenticated = true;

  useEffect(() => {
    if (typeof isAuthenticated !== "undefined") {
      setLoading(false);
    }
  }, [isAuthenticated]);

  if (loading) return <div>LOADING</div>;
  if (isAuthenticated) return <Routes routes={privateRoutes} />;
  return <Routes routes={publicRoutes} />;
}

export default App;
