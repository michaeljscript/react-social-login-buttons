import React from 'react';
import SocialLoginButton from './SocialLoginButton';

/**
 * Github login button.
 * For props check {@link SocialLoginButton}
 */
const GithubLoginButton = ({text = 'Login with Github', ...rest}) => {
    return <SocialLoginButton style={{background: "#333333"}} activeStyle={{background: "#555555"}}
                              text={text} icon="github-circled" {...rest}/>;
};

export default GithubLoginButton;