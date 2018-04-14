import React from "react";
import createButton from "./create-button";

const config = {
    text: "Login with GitHub",
    icon: "github-circled",
    style: { background: "#333333" },
    activeStyle: { background: "#555555" },
};

const GithubLoginButton = createButton(config);

export default GithubLoginButton;
