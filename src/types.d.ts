import React from "react"

interface SpecificSocialLoginButtonProps {
  onClick?: () => any
  onMouseEnter?: () => any
  onMouseLeave?: () => any
  
  /** This style will be used when an user hovers above the button. */
  activeStyle?: object

  /** Icon will be used. Can be a react component or a string. If string provided, will render an <i> element, see `iconFormat`. */
  icon?: string|React.Component|Function

  /** If icon is a string, then will render an <i> element with the classname returned from this function. */
  iconFormat?: (iconName: string) => string

  /** The size of icon e.g. "26px". */
  iconSize?: string

  /** If true, active styles wont apply. You can use your logic and compute custom styles by passing an object to `style` param. */
  preventActiveStyles?: Boolean

  /** Override default button styles. */
  style?: object

  /** Align of the button text. */
  textAlign?: "left" | "center" | "right"

}

declare class SpecificSocialLoginButton extends React.Component<SpecificSocialLoginButtonProps, any> {}

declare module "react-social-login-buttons" {
  export class FacebookLoginButton extends SpecificSocialLoginButton {}
  export class GoogleLoginButton extends SpecificSocialLoginButton {}
  export class GithubLoginButton extends SpecificSocialLoginButton {}
  export class TwitterLoginButton extends SpecificSocialLoginButton {}
  export class AmazonLoginButton extends SpecificSocialLoginButton {}
  export class InstagramLoginButton extends SpecificSocialLoginButton {}
  export class LinkedInLoginButton extends SpecificSocialLoginButton {}
  export class MicrosoftLoginButton extends SpecificSocialLoginButton {}
}


