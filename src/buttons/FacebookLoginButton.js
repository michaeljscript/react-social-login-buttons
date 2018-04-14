import React from "react";
import createButton from "./create-button";

const config = {
    text: "Login with Facebook",
    icon: "facebook-official",
    style: { background: "#3b5998" },
    activeStyle: { background: "#293e69" },
};

const FacebookLoginButton = createButton(config);

export default FacebookLoginButton;
