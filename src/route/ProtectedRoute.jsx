import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = (props) => {
  const { user } = useSelector((state) => state.user);
  return user
    ? <Route {...props} />
    : <Redirect to={{ pathname: "/login" }} />;
};
