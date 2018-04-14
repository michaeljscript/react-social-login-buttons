import React from "react";
import createButton from "./create-button";

const config = {
  activeStyle: { background: "#3b82da" },
  icon: "twitter",
  style: { background: "#5aa4eb" },
  text: "Login with Twitter",
};

const TwitterLoginButton = createButton(config);

export default TwitterLoginButton;
