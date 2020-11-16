import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Login, Regis, PagesAdmin } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Regis} />
        <Route exact path="/admin" component={PagesAdmin} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
