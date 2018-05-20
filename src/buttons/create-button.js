import React from "react";
import SocialLoginButton from "./SocialLoginButton";
import SocialLoginButtonProvider from "./SocialLoginButtonProvider";

const createButton = config => props => {
  const finalProps = {
    // eslint-disable-next-line
    activeStyle: { ...config.activeStyle, ...props.activeStyle },
    ...config,
    ...props,
    // eslint-disable-next-line
    style: { ...config.style, ...props.style },
  };

  return <SocialLoginButton {...finalProps} />;

  return <SocialLoginButtonProvider defaults={config} props={props} />;
};

export default createButton;
