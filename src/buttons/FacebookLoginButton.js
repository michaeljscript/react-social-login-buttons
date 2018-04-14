import React from "react";
import createButton from "./create-button";

const config = {
    activeStyle: { background: "#293e69" },
    icon: "facebook-official",
    style: { background: "#3b5998" },
    text: "Login with Facebook",
};

const FacebookLoginButton = createButton(config);

export default FacebookLoginButton;
