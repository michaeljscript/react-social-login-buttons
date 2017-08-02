import React from 'react';
import {render} from 'react-dom';

import {
    FacebookLoginButton,
    GoogleLoginButton,
    GithubLoginButton,
    TwitterLoginButton,
    AmazonLoginButton
} from '../../src';

render(<div style={{width: 300, margin: '75px auto'}}>
    <FacebookLoginButton onClick={e => alert('Hello from facebook button')}/>
    <GoogleLoginButton/>
    <GithubLoginButton/>
    <TwitterLoginButton/>
    <AmazonLoginButton/>
</div>, document.getElementById('app'));