import React from "react";
import SocialLoginButtonProvider from "./SocialLoginButtonProvider";

const defaults = {
    text: "Login with Facebook",
    icon: "facebook-official",
    style: { background: "#3b5998" },
    activeStyle: { background: "#293e69" },
};
/**
 * Facebook login button.
 * For props check {@link SocialLoginButton}
 * @extends {SocialLoginButton}
 */
const FacebookLoginButton = props => {
    return <SocialLoginButtonProvider defaults={defaults} props={props} />;
};

export default FacebookLoginButton;
