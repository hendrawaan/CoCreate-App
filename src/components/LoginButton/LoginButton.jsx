import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ButtonWithIcon } from "../ButtonWithIcon/ButtonWithIcon";

const FACEBOOK_APP_ID = "3709480149091130";
 
export const FacebookLoginBtn = (props) => {
  return (
    <FacebookLogin
      appId={FACEBOOK_APP_ID}
      callback={props.callback}
      disableMobileRedirect={true}
      render={(renderProps) => (
        <ButtonWithIcon
          block
          variant="outline-primary"
          className="my-3"
          onClick={renderProps.onClick}
          icon={<FaFacebookF className="mr-2" />}
          label="Masuk dengan Facebook"
        />
      )}
    />
  );
};

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
