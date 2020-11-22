import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ButtonWithIcon } from "../ButtonWithIcon/ButtonWithIcon";

export const GoogleLoginBtn = (props) => {
  return (
    <ButtonWithIcon
      block
      variant="outline-dark"
      className="my-3"
      onClick={props.onClick}
      icon={<FcGoogle className="mr-2" />}
      label="Masuk dengan Google"
    />
  );
};
