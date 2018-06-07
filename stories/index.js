import * as buttons from "../src/buttons";
import { FacebookLoginButton } from "../src";
import React from "react";
import createButton from "../src/buttons/create-button";
import { storiesOf } from "@storybook/react";

const renderAllButtons = buttons => (
  <div>{Object.values(buttons).map((Button, i) => <Button key={i} onClick={() => alert("hello")} />)}</div>
);

//eslint-disable-next-line
storiesOf("Social login buttons", module)
  .addDecorator(story => <div style={{ fontFamily: "sans-serif" }}>{story()}</div>)
  .add("All buttons", () => renderAllButtons(buttons))
  .add("With custom content", () => (
    <FacebookLoginButton>
      <span>Custom text</span>
    </FacebookLoginButton>
  ))
  .add("Custom button", () => {
    const config = {
      activeStyle: { background: "#293e69" },
      icon: "facebook",
      iconFormat: name => `fa fa-${name}`,
      style: { background: "#3b5998" },
      text: "Login with Facebook",
    };
    /** My Facebook login button. */
    const MyFacebookLoginButton = createButton(config);
    return <MyFacebookLoginButton>Hello</MyFacebookLoginButton>;
  });
