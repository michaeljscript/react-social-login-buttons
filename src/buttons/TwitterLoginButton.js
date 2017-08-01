import React from 'react';
import SocialLoginButton from './SocialLoginButton';

/**
 * Twitter login button.
 * For props check {@link SocialLoginButton}
 */
const TwitterLoginButton = ({text = 'Login with Twitter', ...rest}) => {
    return <SocialLoginButton style={{background: "#5aa4eb"}} activeStyle={{background: "#3b82da"}}
                              text={text} icon="twitter" {...rest}/>;
};

export default TwitterLoginButton;