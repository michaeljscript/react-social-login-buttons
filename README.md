# React Social Login Buttons
Simple package to display social login buttons using React

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

```jsx
<FacebookLoginButton text="Login with Facebook" onClick={() => alert('Hello')} />
```

By default there will be a text "Login with Facebook"
```jsx
<FacebookLoginButton onClick={() => alert('Hello')} />
```

## Social Buttons Support

We currently support just a few login buttons. Others will be implemented later.

#### FacebookLoginButton
```jsx
<FacebookLoginButton onClick={() => alert('Hello')} />
```

#### GoogleLoginButton
```jsx
<GoogleLoginButton onClick={() => alert('Hello')} />
```

#### GithubLoginButton
```jsx
<GithubLoginButton onClick={() => alert('Hello')} />
```

#### TwitterLoginButton
```jsx
<TwitterLoginButton onClick={() => alert('Hello')} />
```

#### AmazonLoginButton
```jsx
<AmazonLoginButton onClick={() => alert('Hello')} />
```

## Props
Props for every Button

### `onClick` {function} (optional)
Will be triggered when clicked on the button.

### `text` {String} (optional)
This text will be displayed

### `style` {Object} (optional)
Custom button styles

### `activeStyle` {Object} (optional)
activeStyle styles will be applied instead of style when mouse hovers above the element

### `icon` {String} (optional)
This icon will be displayed. We use a special font package to minimize the traffic. Only necessary icons are imported.

### `iconSize` {String} (optional)
Icon will have this size. Eg. "26px"

### `iconFormat` {function} (optional)
Format icon className. Eg. (name) => \`fa-icon fa-icon-${name}\`


## Why react-social-login-buttons ?

react-social-login-buttons is focused on speed, and simplicity.
Other social buttons will be implemented later

## Contribution

I welcome issues and pull requests on https://github.com/MichalSzorad/react-social-login-buttons

## Thanks

Special thanks for people from

### Fontello
- http://fontello.com/
- Awesome icon font generator

### Font Awesome
- http://fontawesome.io/
- Awesome icons