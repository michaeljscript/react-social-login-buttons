import React from "react";
import createButton from "./create-button";
import createSvgIcon from "./createSvgIcon";
import icon from "./amazon-logo.svg";

const config = {
  activeStyle: { background: "#ff9f23" },
  icon: createSvgIcon(icon),
  style: { background: "#f9ae32" },
  text: "Login with Amazon",
};

const AmazonLoginButton = createButton(config);

export default AmazonLoginButton;
