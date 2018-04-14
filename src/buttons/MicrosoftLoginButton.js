import React from "react";
import createButton from "./create-button";

const config = {
  activeStyle: { background: "rgb(0, 137, 255)" },
  icon: "windows",
  style: { background: "rgb(50, 159, 253)" },
  text: "Login with Microsoft",
};

const MicrosoftLoginButton = createButton(config);

export default MicrosoftLoginButton;
