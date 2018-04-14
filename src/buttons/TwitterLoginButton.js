import React from "react";
import createButton from "./create-button";

const config = {
    text: "Login with Twitter",
    icon: "twitter",
    style: { background: "#5aa4eb" },
    activeStyle: { background: "#3b82da" },
};

const TwitterLoginButton = createButton(config);

export default TwitterLoginButton;
