import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { loginWithGoogle } from '../../store/user';


export const GoogleLoginCallBack = () => {
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loginWithGoogle(window.location.search))
  }, [dispatch])

  if(user) {
    return <Redirect to="/" />;
  }

  if(error) {
    return <Redirect to="/login" />;
  }

  return (
    <div>Tunggu sebentar sedang mengarahkan Anda.</div>
  )
}
