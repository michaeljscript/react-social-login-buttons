import React from "react";
import createButton from "./create-button";

const config = {
    activeStyle: { background: "rgb(7, 112, 169)" },
    icon: "linkedin",
    style: { background: "rgb(26, 129, 185)" },
    text: "Login with LinkedIn",
};

const LinkedInLoginButton = createButton(config);
export default LinkedInLoginButton;
