import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Login } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
  );
};

export default Router;