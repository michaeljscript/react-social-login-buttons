import T from 'prop-types';
import React, { Component } from 'react';
import DynamicIcon from './DynamicIcon';

const DEFAULT_ICON_COLOR = '#FFFFFF';

export default class SocialLoginButton extends Component {
  constructor (props) {
    super(props);
    this.state = { focused: false, hovered: false };

    this.handleMouseEnter = () => {
      this.setState({ hovered: true });
      if (typeof this.props.onMouseEnter === 'function') {
        this.props.onMouseEnter();
      }
    };

    this.handleMouseLeave = () => {
      this.setState({ hovered: false });
      if (typeof this.props.onMouseLeave === 'function') {
        this.props.onMouseLeave();
      }
    };

    this.handleFocus = () => {
      this.setState({ focused: true });
    };

    this.handleBlur = () => {
      this.setState({ focused: false });
    };


    this.handleClick = (e) => {
      if (typeof this.props.onClick === 'function') {
        this.props.onClick(e);
      }
    };
  }


  render () {
    const {
      activeStyle,
      align,
      text,
      children = text,
      className,
      icon,
      iconFormat,
      iconSize,
      iconColor = DEFAULT_ICON_COLOR,
      preventActiveStyles,
      size,
      style: customStyle,
    } = this.props;
    const { focused, hovered } = this.state;

    const buttonStyles = computeButtonStyles(styles.button, {
      activeStyle: preventActiveStyles ? customStyle : activeStyle,
      customStyle,
      active: hovered || focused,
      size,
    });

    return (
      <button
        type="button"
        style={buttonStyles}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...{ className }}
      >
        <div style={styles.flex}>
          <div style={{ display: 'flex', justifyContent: 'center', minWidth: iconSize }}>
            <DynamicIcon type={icon} size={iconSize} format={iconFormat} color={iconColor} />
          </div>
          <div style={styles.divider} />
          <div style={{ textAlign: align, width: '100%' }}>{children}</div>
        </div>
      </button>
    );
  }
}

const computeButtonStyles = (defaults, { size, customStyle, active, activeStyle }) => ({
  ...defaults,
  height: size,
  ...customStyle,
  ...(active && activeStyle),
});

SocialLoginButton.propTypes = {
  activeStyle: T.object,
  align: T.oneOf(['left', 'right', 'center']),
  children: T.node,
  className: T.string,
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
  align: 'left',
  iconSize: '26px',
  preventActiveStyles: false,
  size: '50px',
};

const styles = {
  button: {
    display: 'block',
    border: 0,
    borderRadius: 3,
    boxShadow: 'rgba(0, 0, 0, 0.5) 0 1px 2px',
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '19px',
    margin: '5px',
    width: 'calc(100% - 10px)',
    overflow: 'hidden',
    padding: '0 10px',
    userSelect: 'none',
  },
  divider: {
    width: '10px',
  },
  flex: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
  },
};
