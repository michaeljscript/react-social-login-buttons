import React from 'react';
import SocialLoginButtonProvider from './SocialLoginButtonProvider';

const defaults = {
    text: 'Login with Google',
    icon: 'gplus',
    style: {background: '#cb3f22'},
    activeStyle: {background: '#a5331c'}
};

/**
 * Google login button.
 * For props check {@link SocialLoginButton}
 */
const GoogleLoginButton = (props) => {
    return <SocialLoginButtonProvider defaults={defaults} props={props}/>;
};

export default GoogleLoginButton;