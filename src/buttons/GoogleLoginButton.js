import React from 'react';
import SocialLoginButton from './SocialLoginButton';

/**
 * Google login button.
 * For props check {@link SocialLoginButton}
 */
const GoogleLoginButton = ({text = 'Login with Google', ...rest}) => {
    return <SocialLoginButton style={{background: "#cb3f22"}} activeStyle={{background: "#a5331c"}}
                              text={text} icon="gplus" {...rest}/>;
};

export default GoogleLoginButton;