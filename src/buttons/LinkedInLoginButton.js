import React from "react";
import createButton from "./create-button";

const config = {
    text: "Login with LinkedIn",
    icon: "linkedin",
    style: { background: "rgb(26, 129, 185)" },
    activeStyle: { background: "rgb(7, 112, 169)" },
};

const LinkedInLoginButton = createButton(config);
export default LinkedInLoginButton;
