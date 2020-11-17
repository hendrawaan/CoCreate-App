import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../store/profile";

/* Hanya untuk testing */
export function Home() {
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
      {profile && (
        <div className="mt-5">
          Hai {profile.user.name} <br /> Anda{" "}
          {profile.user.verification ? " sudah " : " belum "} terverifikasi
        </div>
      )}
    </div>
  );
}
