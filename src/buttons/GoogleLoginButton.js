import React from "react";
import createButton from "./create-button";

const config = {
    text: "Login with Google",
    icon: "gplus",
    style: { background: "#cb3f22" },
    activeStyle: { background: "#a5331c" },
};

const GoogleLoginButton = createButton(config);

export default GoogleLoginButton;
