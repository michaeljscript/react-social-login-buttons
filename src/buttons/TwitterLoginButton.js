import React from 'react';
import SocialLoginButtonProvider from './SocialLoginButtonProvider';

const defaults = {
    text: 'Login with Twitter',
    icon: 'twitter',
    style: {background: "#5aa4eb"},
    activeStyle: {background: "#3b82da"}
};

/**
 * Twitter login button.
 * For props check {@link SocialLoginButton}
 */
const TwitterLoginButton = (props) => {
    return <SocialLoginButtonProvider defaults={defaults} props={props}/>;
};

export default TwitterLoginButton;