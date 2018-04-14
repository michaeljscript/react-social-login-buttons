import React from "react";
import createButton from "./create-button";

const config = {
    activeStyle: { background: "#a5331c" },
    icon: "gplus",
    style: { background: "#cb3f22" },
    text: "Login with Google",
};

const GoogleLoginButton = createButton(config);

export default GoogleLoginButton;
