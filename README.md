# React Social Login Buttons
A simple package to display social login buttons using React.

Buttons do not provide any social logic.
They are only visual components listening to some events triggered by the user.

![Social login buttons](https://raw.githubusercontent.com/MichalSzorad/react-social-login-buttons/master/examples/simple/screenshot1.jpg )

## Install
npm
```
npm install --save react-social-login-buttons
```

## Importing

ES6 imports:
```js
import {FacebookLoginButton} from 'react-social-login-buttons';
```

ES6 imports optimized:
```js
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
```

## Usage

Every social login button extends SocialLoginButton.

```js
<FacebookLoginButton text="Login with Facebook" onClick={() => alert('Hello')} />
```

By default there will be a text "Login with Facebook"
```js
<FacebookLoginButton onClick={() => alert('Hello')} />
```

## Social Buttons Support

We currently support just a few login buttons. Others will be implemented later.

#### FacebookLoginButton
```js
<FacebookLoginButton onClick={() => alert('Hello')} />
```

#### GoogleLoginButton
```js
<GoogleLoginButton onClick={() => alert('Hello')} />
```

#### GithubLoginButton
```js
<GithubLoginButton onClick={() => alert('Hello')} />
```

#### TwitterLoginButton
```js
<TwitterLoginButton onClick={() => alert('Hello')} />
```

#### AmazonLoginButton
```js
<AmazonLoginButton onClick={() => alert('Hello')} />
```

#### InstagramLoginButton
```js
<InstagramLoginButton onClick={() => alert('Hello')} />
```

#### LinkedInLoginButton
```js
<LinkedInLoginButton onClick={() => alert('Hello')} />
```

#### MicrosoftLoginButton
```js
<MicrosoftLoginButton onClick={() => alert('Hello')} />
```

## Create your own button
You can create your own button.
You do not have to wait for us to implement all of them.

```js
import React from 'react';
import SocialLoginButtonProvider from 'react-social-login-buttons/lib/buttons/SocialLoginButtonProvider';

const defaults = {
    text: 'Login with Facebook',
    icon: 'facebook',
    iconFormat: name => `fa fa-${name}`,
    style: {background: "#3b5998"},
    activeStyle: {background: "#293e69"}
};
/** My Facebook login button. */
const MyFacebookLoginButton = (props) => {
    return <SocialLoginButtonProvider defaults={defaults} props={props}/>
};

export default MyFacebookLoginButton;
```

If you want to create a more complicated button
you can use `SocialLoginButton` directly.
Do not forget to use style `verticalAlign: middle` on every child
and `paddingRight: 10` on your image/icon
If you want to use bigger image and
bigger button you can use property `size`.

```js
import React from 'react';
import SocialLoginButton from 'react-social-login-buttons/lib/buttons/SocialLoginButton';

/** My Google login button. */
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

export default MyGoogleLoginButton;
```

## Props
Props for every Button

### `onClick` {function} (optional)
Will be triggered when clicked on the button.

### `text` {String} (optional)
This text will be displayed

### `style` {Object} (optional)
Custom button styles

### `children` {React.children} (optional)
If you are using children,
do not forget to use style `verticalAlign: middle` to make them nice
in the middle of the button

### `activeStyle` {Object} (optional)
activeStyle styles will be applied instead of style when mouse hovers above the element

### `icon` {String} (optional)
This icon will be displayed. We use a special font package to minimize the traffic. Only necessary icons are imported.

### `iconSize` {String} (optional)
Icon will have this size. Eg. "26px"

### `size` {String} (optional)
Box will have this size. Eg. "150px"

### `iconFormat` {function} (optional)
Format icon className. Eg. (name) => \`fa-icon fa-icon-${name}\`


## Why react-social-login-buttons ?

react-social-login-buttons is focused on speed and simplicity.
Other social buttons will be implemented later

## Contribution

I welcome issues and pull requests on https://github.com/MichalSzorad/react-social-login-buttons

## Versions

##### version 1.3.4
- Fix package.json error

##### version 1.3.3
- Removed react from dependency

##### version 1.3.1
- Fixed README.md syntax highlighting

##### version 1.3.0
- Allowed to pass children into `SocialLoginButton`

##### version 1.2.1
- Fixed a bug when react-social-login-buttons don't compile

##### version 1.2.0
- Added new buttons for: Instagram, LinkedIn, Microsoft
- New development api - SocialLoginButtonProvider

## Thanks

Special thanks to people from

### Fontello
- http://fontello.com/
- Awesome icon font generator

### Font Awesome
- http://fontawesome.io/
- Awesome icons