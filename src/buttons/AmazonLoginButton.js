import React from "react";
import createButton from "./create-button";

const config = {
    text: "Login with Amazon",
    icon: "amazon",
    style: { background: "#f9ae32" },
    activeStyle: { background: "#ff9f23" },
};

const AmazonLoginButton = createButton(config);

export default AmazonLoginButton;
