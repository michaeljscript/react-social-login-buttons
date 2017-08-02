import React from 'react';
import SocialLoginButton from './SocialLoginButton';

/**
 * Github login button.
 * For props check {@link SocialLoginButton}
 */
const GithubLoginButton = ({text = 'Login with Github', style, activeStyle, ...rest}) => {
    return <SocialLoginButton style={{background: "#333333", ...style}}
                              activeStyle={{background: "#555555", ...activeStyle}}
                              text={text} icon="github-circled" {...rest}/>;
};

export default GithubLoginButton;