import React from 'react';
import {render} from 'react-dom';

import {
    FacebookLoginButton,
    GoogleLoginButton,
    GithubLoginButton,
    TwitterLoginButton,
    AmazonLoginButton
} from '../../src';

/*

// visual tests
<FacebookLoginButton onClick={e => alert('Hello from facebook button')} iconSize="150px" size="150px"/>
<GoogleLoginButton size="150px"/>
<GithubLoginButton icon="github" iconFormat={name => `demo-icon icon-${name}-circled`}/>
<TwitterLoginButton style={{color: 'red'}} activeStyle={{color: 'blue'}}/>
<AmazonLoginButton icon="gplus"/>

 */

render(<div style={{width: 300, margin: '75px auto'}}>
    <FacebookLoginButton onClick={e => alert('Hello from facebook button')}/>
    <GoogleLoginButton/>
    <GithubLoginButton/>
    <TwitterLoginButton/>
    <AmazonLoginButton/>
</div>, document.getElementById('app'));