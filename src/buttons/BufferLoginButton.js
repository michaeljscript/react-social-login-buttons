import React from "react";
import createButton from "./create-button";
import createSvgIcon from "./createSvgIcon";
import icon from "./buffer-logo.svg";

const config = {
  activeStyle: { background: "#1171BB" },
  icon: createSvgIcon(icon),
  style: { background: "#168EEA" },
  text: "Login with Buffer",
};

const BufferLoginButton = createButton(config);

export default BufferLoginButton;
