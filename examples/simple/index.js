import React from 'react';
import {render} from 'react-dom';

import {
    FacebookLoginButton,
    GoogleLoginButton,
    GithubLoginButton,
    TwitterLoginButton,
    AmazonLoginButton,
    InstagramLoginButton,
    LinkedInLoginButton,
    MicrosoftLoginButton
} from '../../src';


// // custom button test
// import SocialLoginButtonProvider from '../../src/buttons/SocialLoginButtonProvider';
//
// const defaults = {
//     text: 'Login with Facebook',
//     icon: 'facebook-official',
//     iconFormat: name => `demo-icon icon-${name}`,
//     style: {background: "#3b5998"},
//     activeStyle: {background: "#293e69"}
// };
// /** My Facebook login button. */
// const MyFacebookLoginButton = (props) => {
//     return <SocialLoginButtonProvider defaults={defaults} props={props}/>
// };
//
// // visual tests
// <FacebookLoginButton onClick={e => alert('Hello from facebook button')} iconSize="150px" size="150px"/>
// <GoogleLoginButton size="150px"/>
// <GithubLoginButton icon="github" iconFormat={name => `demo-icon icon-${name}-circled`}/>
// <TwitterLoginButton style={{color: 'red'}} activeStyle={{color: 'blue'}}/>
// <AmazonLoginButton icon="gplus"/>
//

render(<div style={{width: 300, margin: '75px auto'}}>
    <FacebookLoginButton onClick={e => alert('Hello from facebook button')}/>
    <GoogleLoginButton/>
    <GithubLoginButton/>
    <TwitterLoginButton/>
    <AmazonLoginButton/>
    <InstagramLoginButton/>
    <LinkedInLoginButton/>
    <MicrosoftLoginButton/>
</div>, document.getElementById('app'));