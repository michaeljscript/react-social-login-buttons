import { SocialLoginButton, SocialLoginButtonProps } from "./SocialLoginButton";
import React, { ComponentType } from "react";

type Config = {
  activeStyle?: {};
  icon?: string | ComponentType<{ size: string | number; color: string }>;
  style?: {};
  text?: string;
  type?: "button" | "submit" | "reset";
};

export const createButton = (config?: Config) => (props: SocialLoginButtonProps) => {
  const finalProps = {
    activeStyle: { ...config?.activeStyle, ...props.activeStyle },
    ...config,
    ...props,
    style: { ...config?.style, ...props.style },
  };

  return <SocialLoginButton {...finalProps} />;
};
