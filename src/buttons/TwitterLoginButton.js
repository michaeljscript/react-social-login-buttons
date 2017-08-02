import React from 'react';
import SocialLoginButton from './SocialLoginButton';

/**
 * Twitter login button.
 * For props check {@link SocialLoginButton}
 */
const TwitterLoginButton = ({text = 'Login with Twitter', style, activeStyle, ...rest}) => {
    return <SocialLoginButton style={{background: "#5aa4eb", ...style}} activeStyle={{background: "#3b82da", ...activeStyle}}
                              text={text} icon="twitter" {...rest}/>;
};

export default TwitterLoginButton;