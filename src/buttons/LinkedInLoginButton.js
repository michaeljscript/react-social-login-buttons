import React from 'react';
import SocialLoginButtonProvider from './SocialLoginButtonProvider';

const defaults = {
    text: 'Login with LinkedIn',
    icon: 'linkedin',
    style: { background: "rgb(26, 129, 185)" },
    activeStyle: { background: "rgb(7, 112, 169)" },
};
/**
 * LinkedIn login button.
 * For props check {@link SocialLoginButton}
 * @extends {SocialLoginButton}
 */
const LinkedInLoginButton = (props) => {
    return <SocialLoginButtonProvider defaults={defaults} props={props}/>;
};

export default LinkedInLoginButton;
