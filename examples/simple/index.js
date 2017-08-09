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

import SocialLoginButton from '../../src/buttons/SocialLoginButton';
// // custom button test
//
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
{/*<FacebookLoginButton onClick={e => alert('Hello from facebook button')} iconSize="150px" size="150px"/>*/
}
{/*<GoogleLoginButton size="150px"/>*/
}
{/*<GithubLoginButton icon="github" iconFormat={name => `demo-icon icon-${name}-circled`}/>*/
}
{/*<TwitterLoginButton style={{color: 'red'}} activeStyle={{color: 'blue'}}/>*/
}
{/*<AmazonLoginButton icon="gplus"/>*/
}
{/*<CustomGoogleButton/>*/
}
{/*<SocialLoginButton {...defaults}>*/
}
{/*<img src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-128.png"/>*/
}
{/*<span>Sign in with Google</span>*/
}
{/*</SocialLoginButton>*/
}
{/*<SocialLoginButton {...defaults} style={{background: '#444'}}>*/
}
{/*<img style={{verticalAlign: 'middle'}}*/
}
{/*src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-128.png"*/
}
{/*height={26}/>*/
}
{/*<span style={{verticalAlign: 'middle'}}>Sign in with Google</span>*/
}
{/*</SocialLoginButton>*/
}
{/*<SocialLoginButton {...defaults}>*/
}
{/*<span>Sign in with Google</span>*/
}
{/*</SocialLoginButton>*/
}
{/*<SocialLoginButton {...defaults}>*/
}
{/*<img src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-128.png"/>*/
}
{/*<span>Sign in with Google</span>*/
}
{/*<span>Sign in with Google</span>*/
}
{/*</SocialLoginButton>*/
}
{/*<SocialLoginButton {...defaults} icon="amazon" style={{background: 'red'}}>*/
}
{/*</SocialLoginButton>*/
}
{/*<SocialLoginButton {...defaults} text="hello">*/
}
{/*</SocialLoginButton>*/
}

const defaults = {
    style: {background: "white", color: 'gray'},
    activeStyle: {background: "lightblue", color: 'white'}
};

const CustomGoogleButton = (props) => {
    return <SocialLoginButton {...defaults}>
        <img src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-128.png"
             height={26}/>
        <span>Sign in with Google</span>
    </SocialLoginButton>
};

const MyGoogleLoginButton = (props) => {
    const customProps = {
        style: {
            background: 'white',
            color: '#808080'
        },
        activeStyle: {
            background: '#eeeeee',
        }
    };

    return <SocialLoginButton {...{...customProps, ...props}}>
        <img style={{verticalAlign: 'middle', height: 26, paddingRight: 10}}
             src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-128.png"/>
        <span style={{verticalAlign: 'middle'}}>Sign in with Google</span>
    </SocialLoginButton>
};

render(<div style={{width: 300, margin: '75px auto'}}>
    <FacebookLoginButton onClick={e => alert('Hello from facebook button')}/>
    <GoogleLoginButton/>
    <GithubLoginButton/>
    <TwitterLoginButton/>
    <AmazonLoginButton/>
    <InstagramLoginButton/>
    <LinkedInLoginButton/>
    <MicrosoftLoginButton/>
    <MyGoogleLoginButton/>
</div>, document.getElementById('app'));