import React from "react";
import createButton from "./create-button";
import createSvgIcon from "./createSvgIcon";
import icon from "./github-logo.svg";

const config = {
  activeStyle: { background: "#555555" },
  icon: createSvgIcon(icon),
  style: { background: "#333333" },
  text: "Login with GitHub",
};

const GithubLoginButton = createButton(config);

export default GithubLoginButton;
