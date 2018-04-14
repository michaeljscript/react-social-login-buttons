import React from "react";
import SocialLoginButton from "./SocialLoginButton";
import T from "prop-types";

const SocialLoginButtonProvider = ({ defaults, props }) => {
    const finalProps = {
        // eslint-disable-next-line
        activeStyle: { ...defaults.activeStyle, ...props.activeStyle },
        ...defaults,
        ...props,
        // eslint-disable-next-line
        style: { ...defaults.style, ...props.style },
    };

    return <SocialLoginButton {...finalProps} />;
};

SocialLoginButtonProvider.propTypes = {
    defaults: T.object.isRequired,
    props: T.object.isRequired,
};

export default SocialLoginButtonProvider;
