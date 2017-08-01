import React from 'react';
import SocialLoginButton from './SocialLoginButton';

/**
 * Facebook login button.
 * For props check {@link SocialLoginButton}
 */
const FacebookLoginButton = ({text = 'Login with Facebook', ...rest}) => {
    return <SocialLoginButton style={{background: "#3b5998"}} activeStyle={{background: "#293e69"}}
                              text={text} icon="facebook-official" {...rest}/>;
};

export default FacebookLoginButton;