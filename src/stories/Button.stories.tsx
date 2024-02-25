import React, { FunctionComponent, useState } from "react";
import * as buttons from "../buttons";
import { SocialLoginButtonProps } from "../buttons/SocialLoginButton";
import { createButton, FacebookLoginButton } from "../buttons";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Buttons",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const All = () => {
  return <AllButtons />;
};

export const CustomContent = () => {
  return (
    <FacebookLoginButton>
      <span>Custom text</span>
    </FacebookLoginButton>
  );
};

export const NoIcon = () => {
  return (
    <FacebookLoginButton iconSize={0}>
      <span>Custom text</span>
    </FacebookLoginButton>
  );
};

export const CustomButton = () => {
  const config = {
    activeStyle: { background: "lime" },
    icon: () => <span>👍</span>,
    style: { background: "purple" },
    text: "Log in with my Button",
  };
  const MyLoginButton = createButton(config);
  return <MyLoginButton>Hello</MyLoginButton>;
};

export const Disabled = () => {
  const [disabled, setDisabled] = useState(true);

  const config = {
    activeStyle: { background: "#293e69" },
    icon: () => <span>👍</span>,
    style: { background: "#3b5998" },
    text: "Log in with my Button",
    disabled: true,
    onClick: () => alert("this custom button should be disabled and this should not trigger"),
  };

  const toggleDisable = () => setDisabled(!disabled);

  const MyLoginButton = createButton(config);

  return (
    <div>
      <MyLoginButton disabled={disabled}>{disabled ? "Disabled" : "Enabled"}</MyLoginButton>
      <hr />
      <button onClick={toggleDisable}>Toggle</button>
    </div>
  );
};

function AllButtons() {
  const components: FunctionComponent<SocialLoginButtonProps>[] = Object.values(buttons).filter(
    (e) => e !== buttons.createButton,
  ) as any;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {components.map((Button, i) => (
        <div key={i} style={{ width: "30%" }}>
          <Button onClick={() => alert("Thank you for using react-social-login-buttons!")} />
        </div>
      ))}
    </div>
  );
}
