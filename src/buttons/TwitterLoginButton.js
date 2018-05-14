import React from "react";
import createButton from "./create-button";
import createSvgIcon from "./createSvgIcon";
import icon from "./twitter-logo.svg";

const config = {
  activeStyle: { background: "#3b82da" },
  icon: createSvgIcon(icon),
  style: { background: "#5aa4eb" },
  text: "Login with Twitter",
};

const TwitterLoginButton = createButton(config);

export default TwitterLoginButton;
