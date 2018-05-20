# React Social Login Buttons

A simple package to display social login buttons using React.

Buttons do not provide any social logic.
They are only visual components listening to some events triggered by the user.

![Social login buttons](https://raw.githubusercontent.com/MichalSzorad/react-social-login-buttons/master/examples/simple/screenshot1.jpg)

## Install

npm

```
npm install --save react-social-login-buttons
```

yarn

```
yarn add react-social-login-buttons
```

## Importing

ES6 imports:

```js
import { FacebookLoginButton } from "react-social-login-buttons";
```

ES6 imports optimized:

```js
import FacebookLoginButton from "react-social-login-buttons/lib/buttons/FacebookLoginButton";
```

## Usage

Default button content - "Login with Facebook"

```js
<FacebookLoginButton
  onClick={() => alert("Hello")}
/>
```
Custom button content

```js
<FacebookLoginButton onClick={() => alert("Hello")}><span>Custom text</span></FacebookLoginButton>
```

## Social Buttons Support

We currently support just a few login buttons. Others will be implemented later.

#### FacebookLoginButton

```js
<FacebookLoginButton onClick={() => alert("Hello")} />
```

#### GoogleLoginButton

```js
<GoogleLoginButton onClick={() => alert("Hello")} />
```

#### GithubLoginButton

```js
<GithubLoginButton onClick={() => alert("Hello")} />
```

#### TwitterLoginButton

```js
<TwitterLoginButton onClick={() => alert("Hello")} />
```

#### AmazonLoginButton

```js
<AmazonLoginButton onClick={() => alert("Hello")} />
```

#### InstagramLoginButton

```js
<InstagramLoginButton onClick={() => alert("Hello")} />
```

#### LinkedInLoginButton

```js
<LinkedInLoginButton onClick={() => alert("Hello")} />
```

#### MicrosoftLoginButton

```js
<MicrosoftLoginButton onClick={() => alert("Hello")} />
```

## Create your own button

You can create your own button.

You do not have to wait for us to implement all of them.

You can also use your own icons let's say from font-awesome.
```js
import React from "react";
import createButton from "react-social-login-buttons/lib/buttons/create-button";

const config = {
  text: "Login with Facebook",
  icon: "facebook",
  iconFormat: name => `fa fa-${name}`,
  style: { background: "#3b5998" },
  activeStyle: { background: "#293e69" }
};
/** My Facebook login button. */
const MyFacebookLoginButton = createButton(config);

export default MyFacebookLoginButton;
```
## Props

Props for every Button

### `onClick` {function} (optional)

Will be triggered when clicked on the button.

### `style` {Object} (optional)

Custom button styles

### `children` {React.children} (optional)

You can pass any children to our buttons.

### `activeStyle` {Object} (optional)

activeStyle styles will be applied instead of style when mouse hovers above the element

### `icon` {String|Node} (optional)

This icon will be displayed.
If you pass a string, <i class="" /> will be rendered.

### `iconSize` {String} (optional)

Icon will have this size. Eg. "26px"

### `size` {String} (optional)

Box will have this size. Eg. "150px"

### `iconFormat` {function} (optional)

Format icon className. Eg. (name) => \`fa-icon fa-icon-${name}\`

### `textAlign` {"left" | "right" | "center"} (optional)

Align the text on the button (default is left).

## Why react-social-login-buttons ?

react-social-login-buttons is focused on speed and simplicity.
Other social buttons will be implemented later

## Contribution

I welcome issues and pull requests on https://github.com/MichalSzorad/react-social-login-buttons

## Versions

##### version 1.3.5

* Change react version

##### version 1.3.4

* Fix package.json error

##### version 1.3.3

* Removed react from dependency

##### version 1.3.1

* Fixed README.md syntax highlighting

##### version 1.3.0

* Allowed to pass children into `SocialLoginButton`

##### version 1.2.1

* Fixed a bug when react-social-login-buttons don't compile

##### version 1.2.0

* Added new buttons for: Instagram, LinkedIn, Microsoft
* New development api - SocialLoginButtonProvider

## Thanks

Special thanks to people from

### Fontello

* http://fontello.com/
* Awesome icon font generator

### Font Awesome

* http://fontawesome.io/
* Awesome icons
