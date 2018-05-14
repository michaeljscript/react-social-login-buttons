import React from "react";
import createButton from "./create-button";
import createSvgIcon from "./createSvgIcon";
import icon from "./instagram-logo.svg";

const config = {
  activeStyle: {
    background: "linear-gradient(to right, rgb(214, 146, 60) 0%, rgb(160, 11, 143) 50%, rgb(56, 10, 115) 100%)",
  },
  icon: createSvgIcon(icon),
  style: {
    background: "linear-gradient(to right, rgb(236, 146, 35) 0%, rgb(177, 42, 160) 50%, rgb(105, 14, 224) 100%)",
  },
  text: "Login with Instagram",
};

const InstagramLoginButton = createButton(config);
export default InstagramLoginButton;
