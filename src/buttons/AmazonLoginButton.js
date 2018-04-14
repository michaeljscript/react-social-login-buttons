import React from "react";
import SocialLoginButtonProvider from "./SocialLoginButtonProvider";

const defaults = {
    text: "Login with Amazon",
    icon: "amazon",
    style: { background: "#f9ae32" },
    activeStyle: { background: "#ff9f23" },
};

/**
 * Amazon login button.
 * For props check {@link SocialLoginButton}
 */
const AmazonLoginButton = props => {
    return <SocialLoginButtonProvider defaults={defaults} props={props} />;
};

export default AmazonLoginButton;
