import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavApp } from "../components";
import {
  Admin,
  GoogleLoginCallBack,
  Home,
  Login,
  NotFound,
  Profile,
  Trending,
  DetailPost,
  Group
} from "../pages";
import { AdminHome } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

const Router = () => {
  const navItems = [
    { label: "Home", link: "/", isProtected: false },
    { label: "Profile", link: "/profile", isProtected: true },
    { label: "Trending", link: "/trending", isProtected: true },
    { label: "Group", link: "/group", isProtected: true }
  ];

  return (
    <BrowserRouter>
      <NavApp navItems={navItems} />
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/google-callback" component={GoogleLoginCallBack} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/profile/:id" component={Profile} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/admin" component={Admin} />
        <ProtectedRoute exact path="/feed/:id" component={DetailPost} />
        <ProtectedRoute exact path="/group" component={Group} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
