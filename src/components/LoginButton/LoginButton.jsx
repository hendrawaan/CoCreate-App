import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ButtonWithIcon } from "../ButtonWithIcon/ButtonWithIcon";

const FACEBOOK_APP_ID = "3709480149091130";
const GOOGLE_CLIENT_ID =
  "159468599880-jg7h0rjjpsre487gnf99mc1it2qtb3iu.apps.googleusercontent.com";

export const FacebookLoginBtn = (props) => {
  return (
    <FacebookLogin
      appId={FACEBOOK_APP_ID}
      fields="name,email,picture"
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
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={props.callback}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <ButtonWithIcon
          block
          variant="outline-dark"
          className="my-3"
          onClick={renderProps.onClick}
          icon={<FcGoogle className="mr-2" />}
          label="Masuk dengan Google"
        />
      )}
    />
  );
};

export const GoogleLogoutBtn = (props) => {
  return (
    <GoogleLogout
      clientId={GOOGLE_CLIENT_ID}
      onLogoutSuccess={props.callback}
      render={(renderProps) => (
        <ButtonWithIcon
          className="my-3"
          onClick={renderProps.onClick}
          label="Logout"
        />
      )}
    />
  );
};
