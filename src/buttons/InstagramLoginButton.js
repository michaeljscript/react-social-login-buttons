import React from 'react';
import SocialLoginButtonProvider from './SocialLoginButtonProvider';

const defaults = {
    text: 'Login with Instagram',
    icon: 'instagram',
    style: {
        background: "linear-gradient(to right, rgb(236, 146, 35) 0%, rgb(177, 42, 160) 50%, rgb(105, 14, 224) 100%)"
    },
    activeStyle: {
        background: "linear-gradient(to right, rgb(214, 146, 60) 0%, rgb(160, 11, 143) 50%, rgb(56, 10, 115) 100%)"
    }
};
/**
 * Instagram login button.
 * For props check {@link SocialLoginButton}
 * @extends {SocialLoginButton}
 */
const InstagramLoginButton = (props) => {
    return <SocialLoginButtonProvider defaults={defaults} props={props}/>
};

export default InstagramLoginButton;