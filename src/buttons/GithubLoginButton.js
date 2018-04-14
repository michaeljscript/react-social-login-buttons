import React from "react";
import createButton from "./create-button";

const config = {
    activeStyle: { background: "#555555" },
    icon: "github-circled",
    style: { background: "#333333" },
    text: "Login with GitHub",
};

const GithubLoginButton = createButton(config);

export default GithubLoginButton;
