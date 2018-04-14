import React from "react";
import SocialLoginButton from "./SocialLoginButton";

const SocialLoginButtonProvider = ({ defaults, props }) => {
    const finalProps = {
        activeStyle: { ...defaults.activeStyle, ...props.activeStyle },
        ...defaults,
        ...props,
        style: { ...defaults.style, ...props.style },
    };

    return <SocialLoginButton {...finalProps} />;
};

export default SocialLoginButtonProvider;
