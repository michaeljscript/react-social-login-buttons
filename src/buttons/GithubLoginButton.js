import React from 'react';
import SocialLoginButtonProvider from './SocialLoginButtonProvider';

const defaults = {
    text: 'Login with Github',
    icon: 'github-circled',
    style: {background: "#333333"},
    activeStyle: {background: '#555555'}
};
/**
 * Github login button.
 * For props check {@link SocialLoginButton}
 */
const GithubLoginButton = (props) => {
    return <SocialLoginButtonProvider defaults={defaults} props={props}/>;
};

export default GithubLoginButton;