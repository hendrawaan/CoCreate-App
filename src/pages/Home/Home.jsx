import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/user";

/* Hanya untuk testing */
export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <div className="text-center m-5">
      <h1>Ini Halaman Home</h1>
      <br />
      <Button
        variant="primary"
        type="submit"
        onClick={
          user ? () => dispatch(logout()) : () => (window.location = "/login")
        }
      >
        {user ? "Logout" : "Login"}
      </Button>
    </div>
  );
}
