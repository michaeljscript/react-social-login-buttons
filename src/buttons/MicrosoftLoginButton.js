import React from "react";
import createButton from "./create-button";

const config = {
    text: "Login with Microsoft",
    icon: "windows",
    style: { background: "rgb(50, 159, 253)" },
    activeStyle: { background: "rgb(0, 137, 255)" },
};

const MicrosoftLoginButton = createButton(config);

export default MicrosoftLoginButton;
