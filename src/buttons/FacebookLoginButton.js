import React from "react";
import createButton from "./create-button";
import createSvgIcon from "./createSvgIcon";
import icon from "./facebook-logo.svg";

const config = {
  activeStyle: { background: "#293e69" },
  icon: createSvgIcon(icon),
  style: { background: "#3b5998" },
  text: "Login with Facebook",
};

const FacebookLoginButton = createButton(config);

export default FacebookLoginButton;
