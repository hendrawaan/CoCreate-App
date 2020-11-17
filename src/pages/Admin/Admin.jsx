import jwt_decode from "jwt-decode";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export function Admin() {
  const { user } = useSelector((state) => state.user);

  if (user) {
    const { token } = user;
    const decode = jwt_decode(token);

    if (decode.type_user !== 1) {
      return <Redirect to="/error" />;
    }
  }

  return <div>Halaman Admin Browww</div>;
}
