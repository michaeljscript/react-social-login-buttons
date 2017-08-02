import React from 'react';
import SocialLoginButton from './SocialLoginButton';

/**
 * Amazon login button.
 * For props check {@link SocialLoginButton}
 */
const AmazonLoginButton = ({text = 'Login with Amazon', style, activeStyle, ...rest}) => {
    return <SocialLoginButton style={{background: "#f9ae32", ...style}} activeStyle={{background: "#f9b257", ...activeStyle}}
                              text={text} icon="amazon" {...rest}/>;
};

export default AmazonLoginButton;