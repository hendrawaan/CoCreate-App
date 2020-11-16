import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/profile";
import { logout } from "../../store/user";

/* Hanya untuk testing */
export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { profile } = useSelector((state) => state.profile);
  useEffect(() => {
    if (user) {
      dispatch(getProfile(user.token));
    }
  }, [dispatch, user]);

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
      <br />
      {profile && (
        <div className="mt-5">
          Hai {profile.user.name} <br /> Anda{" "}
          {profile.user.verification === "False" ? " belum " : " sudah "} terverifikasi
        </div>
      )}
    </div>
  );
}
