import React from "react";
import createButton from "./create-button";

const config = {
  activeStyle: { background: "#ff9f23" },
  icon: "amazon",
  style: { background: "#f9ae32" },
  text: "Login with Amazon",
};

const AmazonLoginButton = createButton(config);

export default AmazonLoginButton;
