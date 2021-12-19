import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";

import { HOME_ROUTER, LOGIN_ROUTER } from "../utils/consts";
import { privateRoutes, publicRoutes } from "./routers";

import { auth } from "../utils/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

const AppRouter = () => {
  const [ user ] = useAuthState(auth);
  return user ?
    (
      <Switch>
        { privateRoutes.map(({ path, Component }) =>
          <Route key={ path } path={ path } component={ Component } exact={ true }/>) }
        <Redirect to={ HOME_ROUTER }/>
      </Switch>
    )
    :
    (
      <Switch>
        { publicRoutes.map(({ path, Component }) =>
          <Route key={ path } path={ path } component={ Component } exact={ true }/>) }
        <Redirect to={ LOGIN_ROUTER }/>
      </Switch>
    );
};

export default AppRouter;