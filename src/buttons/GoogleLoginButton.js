import React from "react";
import createButton from "./create-button";
import createSvgIcon from "./createSvgIcon";
import icon from "./google-logo.svg";

const config = {
  activeStyle: { background: "#a5331c" },
  icon: createSvgIcon(icon),
  style: { background: "#cb3f22" },
  text: "Login with Google",
};

const GoogleLoginButton = createButton(config);

export default GoogleLoginButton;
