import "../fontello-social/css/social-login-font.css";
import Icon from "./icon";
import T from "prop-types";
import React, { Component } from "react";

export default class SocialLoginButton extends Component {
  state = { hovered: false };

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  handleClick = () => {
    if (typeof this.props.onClick === "function") {
      this.props.onClick();
    }
  };

  render () {
    const {
      style: customStyle,
      activeStyle,
      children,
      text = children,
      icon,
      iconFormat,
      iconSize,
      size,
      textAlign,
    } = this.props;
    const { hovered } = this.state;

    const buttonStyles = computeButtonStyles(styles.button, {
      activeStyle,
      customStyle,
      hovered,
      size,
      text,
      textAlign,
    });

    const childrenCount = React.Children.count(children);

    // classic usage of this button
    if (childrenCount === 0) {
      return (
        <div
          style={buttonStyles}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {icon && (
            <span style={{ ...styles.icon, height: size, lineHeight: size }}>
              <Icon name={icon} size={iconSize} format={iconFormat} />
            </span>
          )}
          <span>{text}</span>
        </div>
      );
    }

    // children provided, rendering children as text
    return (
      <div
        style={buttonStyles}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span style={styles.spanFix} />
        {text}
      </div>
    );
  }
}

const computeButtonStyles = (defaults, { text, size, textAlign, customStyle, hovered, activeStyle }) => ({
  ...defaults,
  ...{
    height: size,
    lineHeight: typeof text === "string" ? size : "auto",
    textAlign,
  },
  ...customStyle,
  ...(hovered && activeStyle),
});

SocialLoginButton.propTypes = {
  activeStyle: T.object,
  children: T.node,
  icon: T.string,
  iconFormat: T.func,
  iconSize: T.string,
  onClick: T.func,
  size: T.string,
  style: T.object,
  text: T.string,
  textAlign: T.oneOf(["left", "right", "center"]),
};

SocialLoginButton.defaultProps = {
  iconSize: "26px",
  size: "50px",
  textAlign: "left",
};

const styles = {
  button: {
    borderRadius: 3,
    boxShadow: "rgba(0, 0, 0, 0.5) 0 1px 2px",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "120%",
    margin: 5,
    overflow: "hidden",
    padding: "0 10px",
    userSelect: "none",
  },
  icon: {
    float: "left",
    paddingRight: "10px",
  },
  spanFix: {
    display: "inline-block",
    height: "100%",
    verticalAlign: "middle",
  },
};
