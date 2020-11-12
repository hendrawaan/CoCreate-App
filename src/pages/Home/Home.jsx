import React, { useState } from "react";
import { Button } from "react-bootstrap";
export default function Home() {
  const [isLogin, setLogin] = useState(localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    setLogin(null);
  };

  const login = () => {
    window.location = "/login";
  };

  return (
    <div className="text-center m-5">
      <h1>Ini Halaman Home</h1>
      <br />
      <Button
        variant="primary"
        type="submit"
        onClick={isLogin ? logout : login}
      >
        {isLogin ? "Logout" : "Login"}
      </Button>
    </div>
  );
}
