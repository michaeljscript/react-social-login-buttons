import "../fontello-social/css/social-login-font.css";
import Icon from "./icon";
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class SocialLoginButton extends Component {
    static propTypes = {
        activeStyle: PropTypes.object,
        icon: PropTypes.string,
        iconFormat: PropTypes.func,
        iconSize: PropTypes.string,
        onClick: PropTypes.func,
        size: PropTypes.string,
        style: PropTypes.object,
        text: PropTypes.string,
        textAlign: PropTypes.oneOf(["left", "right", "center"]),
    };

    constructor (...args) {
        super(...args);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    state = { hovered: false };

    handleMouseEnter () {
        this.setState({ hovered: true });
    }

    handleMouseLeave () {
        this.setState({ hovered: false });
    }

    handleClick () {
        if (typeof this.props.onClick === "function") {
            this.props.onClick();
        }
    }

    render () {
        const {
            style: customStyle,
            activeStyle,
            children,
            text = children,
            icon,
            iconFormat,
            iconSize = "26px",
            size = "50px",
            textAlign = "left",
        } = this.props;
        const { hovered } = this.state;

        const buttonStyles = {
            ...styles.button,
            ...{
                height: size,
                lineHeight: typeof text === "string" ? size : "auto",
                textAlign: textAlign,
            },
            ...customStyle,
            ...(hovered && activeStyle),
        };

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

const styles = {
    button: {
        borderRadius: 3,
        boxShadow: "#b5b5b5 0 1px 2px",
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
