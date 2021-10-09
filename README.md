# React Social Login Buttons

Live demo https://codesandbox.io/s/3rpq558rv5

A simple package to display social login buttons using React.

Buttons do not provide any social logic.
They are only visual components listening to some events triggered by the user.

![Social login buttons](https://raw.githubusercontent.com/MichalSzorad/react-social-login-buttons/develop/examples/simple/screenshot2.png)

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

ES6 imports optimized (deprecated):

```js
import FacebookLoginButton from "react-social-login-buttons/lib/buttons/FacebookLoginButton";
```

## Usage

Default button content - "Log in with Facebook"

```jsx
<FacebookLoginButton onClick={() => alert("Hello")} />
```

Custom button content

```jsx
<FacebookLoginButton onClick={() => alert("Hello")}>
  <span>Custom text</span>
</FacebookLoginButton>
```

## Social Button Types

We currently support just a few login buttons. Others will be implemented later.

#### FacebookLoginButton

```jsx
<FacebookLoginButton onClick={() => alert("Hello")} />
```

#### GoogleLoginButton

```jsx
<GoogleLoginButton onClick={() => alert("Hello")} />
```

#### GithubLoginButton

```jsx
<GithubLoginButton onClick={() => alert("Hello")} />
```

#### TwitterLoginButton

```jsx
<TwitterLoginButton onClick={() => alert("Hello")} />
```

#### AmazonLoginButton

```jsx
<AmazonLoginButton onClick={() => alert("Hello")} />
```

#### InstagramLoginButton

```jsx
<InstagramLoginButton onClick={() => alert("Hello")} />
```

#### LinkedInLoginButton

```jsx
<LinkedInLoginButton onClick={() => alert("Hello")} />
```

#### MicrosoftLoginButton

```jsx
<MicrosoftLoginButton onClick={() => alert("Hello")} />
```

#### BufferLoginButton

```jsx
<BufferLoginButton onClick={() => alert("Hello")} />
```

#### TelegramLoginButton

```jsx
<TelegramLoginButton onClick={() => alert("Hello")} />
```

#### AppleLoginButton

```jsx
<AppleLoginButton onClick={() => alert("Hello")} />
```

#### DiscordLoginButton

```jsx
<DiscordLoginButton onClick={() => alert("Hello")} />
```

## SlackLoginButton

```jsx
<SlackLoginButton onClick={() => alert('Hello')} />
```

### OktaLoginButton

```jsx
<OktaLoginButton onClick={() => alert('Hello')} />
```

### YahooLoginButton

```jsx
<YahooLoginButton onClick={() => alert('Hello')} />
```

## Create your own button

You can create your own button.

You do not have to wait for us to implement all of them.

You can also use your own icons, let's say from font-awesome.

You can also pass a component to the icon prop.

```js
import React from "react";
import {createButton} from "react-social-login-buttons";

const config = {
  text: "Log in with Facebook",
  icon: "facebook",
  iconFormat: name => `fa fa-${name}`,
  style: { background: "#3b5998" },
  activeStyle: { background: "#293e69" }
};
/** My Facebook login button. */
const MyFacebookLoginButton = createButton(config);

export default MyFacebookLoginButton;
```

Config can also look like.
```js
import svgIcon from "./my-svg.svg";
import {createSvgIcon} from "react-social-login-buttons";

const config = {
  text: "Log in with Facebook",
  icon: createSvgIcon(svgIcon),
  iconFormat: name => `fa fa-${name}`,
  style: { background: "#3b5998" },
  activeStyle: { background: "#293e69" }
};
```

## Props

Props for every Button

### `onClick` {function} (optional)

Will be triggered when clicked on the button.

### `style` {Object} (optional)

Custom button styles

### `className` {String} (optional)

Custom button class

### `children` {React.children} (optional)

You can pass any children to our buttons.

### `activeStyle` {Object} (optional)

activeStyle styles will be applied instead of style when mouse hovers above the element

### `icon` {String|Node} (optional)

This icon will be displayed.

If you pass a string, `<i className={format(name)}/>` will be rendered.

### `iconSize` {String} (optional)

Icon will have this size. Eg. "26px"

### `iconColor` {String} (optional)

Icon will have this color - default #FFFFFF

### `size` {String} (optional)

Box will have this size. Eg. "150px"

### `iconFormat` {function} (optional)

Format icon className. Eg. `(name) => "fa-icon fa-icon-" + name`

### `align` {"left" | "right" | "center"} (optional)

Align the text on the button (default is left).

### `preventActiveStyles` {Boolean} (optional) default: false

If set to true, activeStyles won't be used and will be used styles from the style prop.

### Events

- `onClick`
- `onMouseEnter`
- `onMouseLeave`

## Why react-social-login-buttons ?

react-social-login-buttons is focused on speed and simplicity.

## Contribution

I welcome issues and pull requests on https://github.com/MichalSzorad/react-social-login-buttons

## Thanks

Special thanks to people creating awesome svg icons

- [SimpleIcon](https://www.flaticon.com/authors/simpleicon)

- [Simple Icons](https://github.com/simple-icons/simple-icons) 

- [iconmonstr](https://iconmonstr.com/amazon-1-svg/)

- [freepik](https://www.flaticon.com/free-icon/instagram-logo_87390)

- [Icomoon](https://www.flaticon.com/authors/icomoon)

- [icons8](https://icons8.com/icon/set/google/all)
