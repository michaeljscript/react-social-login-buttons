// eslint-disable
import * as React from "react"

interface SpecificSocialLoginButtonProps {
  onClick?: () => any;
  onMouseEnter?: () => any;
  onMouseLeave?: () => any;

  /** This style will be used when an user hovers above the button. */
  activeStyle?: object;

  /** Root element will have this className */
  className?: string;

  /** Icon will be used. Can be a react component or a string. If string provided, will render an <i> element, see `iconFormat`. */
  icon?: string | React.Component | Function;

  /** If icon is a string, then will render an <i> element with the classname returned from this function. */
  iconFormat?: (iconName: string) => string;

  /** The size of icon e.g. "26px". */
  iconSize?: string;

  /** Color of the icon - default is #FFFFFF */
  iconColor?: string;

  /** If true, active styles wont apply. You can use your logic and compute custom styles by passing an object to `style` param. */
  preventActiveStyles?: Boolean;

  /** Override default button styles. */
  style?: object;

  /** Align of the button text. */
  align?: "left" | "center" | "right";

  /** Text will be displayed */
  text?: string;
}

declare class SpecificSocialLoginButton extends React.Component<SpecificSocialLoginButtonProps, any> { }

declare class FacebookLoginButton extends SpecificSocialLoginButton { }
declare class GoogleLoginButton extends SpecificSocialLoginButton { }
declare class GithubLoginButton extends SpecificSocialLoginButton { }
declare class TwitterLoginButton extends SpecificSocialLoginButton { }
declare class AmazonLoginButton extends SpecificSocialLoginButton { }
declare class InstagramLoginButton extends SpecificSocialLoginButton { }
declare class LinkedInLoginButton extends SpecificSocialLoginButton { }
declare class MicrosoftLoginButton extends SpecificSocialLoginButton { }
declare class BufferLoginButton extends SpecificSocialLoginButton { }
declare class TelegramLoginButton extends SpecificSocialLoginButton { }
declare class AppleLoginButton extends SpecificSocialLoginButton { }
declare class DiscordLoginButton extends SpecificSocialLoginButton { }
declare class SlackLoginButton extends SpecificSocialLoginButton { }
declare class OktaLoginButton extends SpecificSocialLoginButton { }
declare class YahooLoginButton extends SpecificSocialLoginButton { }


declare const createButton: (props: SpecificSocialLoginButtonProps) => React.ComponentClass<SpecificSocialLoginButtonProps>;
declare const createSvgIcon: <T extends Function>(Component: T) => (props: { size: string | number }) => T;

export {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  TwitterLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  BufferLoginButton,
  TelegramLoginButton,
  AppleLoginButton,
  DiscordLoginButton,
  SlackLoginButton,
  OktaLoginButton,
  YahooLoginButton,
  createButton,
  createSvgIcon,
}
