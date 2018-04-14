import React from "react";
import SocialLoginButtonProvider from "./SocialLoginButtonProvider";

const createButton = config => props => {
    return <SocialLoginButtonProvider defaults={config} props={props} />;
};

export default createButton;
