import React, { lazy } from "react";
import { Switch } from "react-router-dom";

import AuthRoute from "./AuthRoute";

const Login = lazy(() => import("pages/Login"));
const Overview = lazy(() => import("pages/Overview"));
const Characters = lazy(() => import("pages/Characters"));
const CharacterDetails = lazy(
  () => import("pages/Characters/CharacterDetails")
);
const Starships = lazy(() => import("pages/Starships"));
const NotFound = lazy(() => import("pages/NotFound"));

const Routes = () => (
  <Switch>
    <AuthRoute exact path="/login" component={Login} />

    <AuthRoute exact path="/" redirect="/overview" />
    <AuthRoute exact path="/overview" component={Overview} />

    <AuthRoute exact path="/star-wars" redirect="/star-wars/characters" />
    <AuthRoute exact path="/star-wars/characters" component={Characters} />
    <AuthRoute
      exact
      path="/star-wars/characters/:id"
      component={CharacterDetails}
    />

    <AuthRoute exact path="/star-wars/starships" component={Starships} />

    <AuthRoute component={NotFound} />
  </Switch>
);

export default Routes;
