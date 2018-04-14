import React from 'react';
import SocialLoginButtonProvider from './SocialLoginButtonProvider';

const defaults = {
    text: 'Login with Microsoft',
    icon: 'windows',
    style: { background: "rgb(50, 159, 253)" },
    activeStyle: { background: "rgb(0, 137, 255)" },
};
/**
 * Microsoft login button.
 * For props check {@link SocialLoginButton}
 * @extends {SocialLoginButton}
 */
const MicrosoftLoginButton = (props) => {
    return <SocialLoginButtonProvider defaults={defaults} props={props}/>;
};

export default MicrosoftLoginButton;
