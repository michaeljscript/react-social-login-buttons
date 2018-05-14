import React from "react";
import createButton from "./create-button";
import createSvgIcon from "./createSvgIcon";
import icon from "./microsoft-logo.svg";

const config = {
  activeStyle: { background: "rgb(0, 137, 255)" },
  icon: createSvgIcon(icon),
  style: { background: "rgb(50, 159, 253)" },
  text: "Login with Microsoft",
};

const MicrosoftLoginButton = createButton(config);

export default MicrosoftLoginButton;
