import DynamicIcon from "./DynamicIcon";
import T from "prop-types";
import React, { Component } from "react";

export default class SocialLoginButton extends Component {
  state = { hovered: false };

  handleMouseEnter = () => {
    this.setState({ hovered: true });
    if (typeof this.props.onMouseEnter === "function") {
      this.props.onMouseEnter();
    }
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
    if (typeof this.props.onMouseLeave === "function") {
      this.props.onMouseLeave();
    }
  };

  handleClick = () => {
    if (typeof this.props.onClick === "function") {
      this.props.onClick();
    }
  };

  render () {
    const {
      activeStyle,
      align,
      text,
      children = text,
      icon,
      iconFormat,
      iconSize,
      preventActiveStyles,
      size,
      style: customStyle,
    } = this.props;
    const { hovered } = this.state;

    const buttonStyles = computeButtonStyles(styles.button, {
      activeStyle: preventActiveStyles ? customStyle : activeStyle,
      customStyle,
      hovered,
      size,
    });

    return (
      <div
        style={buttonStyles}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div style={styles.flex}>
          <div style={{ display: "flex", justifyContent: "center", minWidth: iconSize }}>
            <DynamicIcon type={icon} size={iconSize} format={iconFormat} />
          </div>
          <div style={styles.divider} />
          <div style={{ textAlign: align, width: "100%" }}>{children}</div>
        </div>
      </div>
    );
  }
}

const computeButtonStyles = (defaults, { size, customStyle, hovered, activeStyle }) => ({
  ...defaults,
  height: size,
  ...customStyle,
  ...(hovered && activeStyle),
});

SocialLoginButton.propTypes = {
  activeStyle: T.object,
  align: T.oneOf(["left", "right", "center"]),
  children: T.node,
  icon: T.oneOfType([T.string, T.node, T.func]),
  iconFormat: T.func,
  iconSize: T.string,
  onClick: T.func,
  onMouseEnter: T.func,
  onMouseLeave: T.func,
  preventActiveStyles: T.bool,
  size: T.string,
  style: T.object,
  text: T.string,
};

SocialLoginButton.defaultProps = {
  align: "left",
  iconSize: "26px",
  preventActiveStyles: false,
  size: "50px",
};

const styles = {
  button: {
    borderRadius: 3,
    boxShadow: "rgba(0, 0, 0, 0.5) 0 1px 2px",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "19px",
    margin: 5,
    overflow: "hidden",
    padding: "0 10px",
    userSelect: "none",
  },
  divider: {
    width: "10px",
  },
  flex: {
    alignItems: "center",
    display: "flex",
    height: "100%",
  },
};
