import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { logout } from "../../actions/user";
export default function Home() {
  const [isLogin, setLogin] = useState(localStorage.getItem("token"));

  return (
    <div className="text-center m-5">
      <h1>Ini Halaman Home</h1>
      <br />
      <Button
        variant="primary"
        type="submit"
        onClick={
          isLogin ? () => setLogin(logout) : () => (window.location = "/login")
        }
      >
        {isLogin ? "Logout" : "Login"}
      </Button>
    </div>
  );
}
