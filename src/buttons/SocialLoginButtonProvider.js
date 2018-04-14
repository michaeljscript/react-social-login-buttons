import React from 'react';
import SocialLoginButton from './SocialLoginButton';

const SocialLoginButtonProvider = ({ defaults, props }) => {
    const finalProps = {
        ...defaults,
        ...props,
        style: { ...defaults.style, ...props.style },
        activeStyle: { ...defaults.activeStyle, ...props.activeStyle },
    };
    
    return <SocialLoginButton {...finalProps}/>;
};

export default SocialLoginButtonProvider;
