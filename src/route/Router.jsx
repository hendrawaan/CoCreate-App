import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavApp } from "../components";
import { Admin, Login, NotFound, Profile, Trending, Home } from "../pages";
import { AdminHome } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

const Router = () => {
  const navItems = [
    { label: "Home", link: "/", isProtected: false },
    { label: "Profile", link: "/profile", isProtected: true },
    { label: "Trending", link: "/trending", isProtected: true }
  ];

  return (
    <BrowserRouter>
      <NavApp navItems={navItems} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/admin" component={Admin} />
        <ProtectedRoute exact path="/adminpages" component={AdminHome} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
