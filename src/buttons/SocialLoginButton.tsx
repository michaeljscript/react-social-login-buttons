import React, { PropsWithChildren, useState } from "react";
import { DynamicIcon } from "./DynamicIcon";

const DEFAULT_ICON_COLOR = "#FFFFFF";

export type SocialLoginButtonProps = PropsWithChildren<{
  activeStyle?: {};
  align?: "left" | "right" | "center";
  className?: string;
  icon?: string | React.ComponentType<{ size: string | number; color: string }>;
  iconFormat?: (name: string) => string;
  iconSize?: string | number;
  iconColor?: string;
  onClick?: VoidFunction;
  onMouseEnter?: VoidFunction;
  onMouseLeave?: VoidFunction;
  preventActiveStyles?: boolean;
  size?: string;
  style?: {};
  text?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}>;

export const SocialLoginButton = (props: SocialLoginButtonProps) => {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    props.onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    props.onMouseLeave?.();
  };

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  const handleClick = () => props.onClick?.();

  const {
    activeStyle,
    align = "left",
    text,
    children = text,
    className,
    icon,
    iconFormat = (name: string) => name,
    iconSize = "26px",
    iconColor = DEFAULT_ICON_COLOR,
    preventActiveStyles = false,
    size = "50px",
    style: customStyle,
    disabled,
    type = "button",
  } = props;

  const buttonStyles = computeButtonStyles(styles.button, {
    activeStyle: preventActiveStyles ? customStyle : activeStyle,
    customStyle,
    active: hovered || focused,
    size,
  });
  return (
    <button
      style={buttonStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...{ className, disabled, type }}
    >
      <div style={styles.flex}>
        {!isZeroPx(iconSize) && !!icon && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              minWidth: iconSize,
            }}
          >
            <DynamicIcon type={icon} size={iconSize} format={iconFormat} color={iconColor} />
          </div>
        )}
        {!isZeroPx(iconSize) && <div style={styles.divider} />}
        <div style={{ textAlign: align, width: "100%" }}>{children}</div>
      </div>
    </button>
  );
};

const isZeroPx = (size: string | number) => size === "0" || size === "0px" || size === 0;

const computeButtonStyles = (
  defaults: {},
  {
    size,
    customStyle,
    active,
    activeStyle,
  }: {
    size: string | number;
    customStyle?: {};
    active: boolean;
    activeStyle?: {};
  },
) => ({
  ...defaults,
  height: size,
  ...customStyle,
  ...(active && activeStyle),
});

const styles = {
  button: {
    display: "block",
    border: 0,
    borderRadius: 3,
    boxShadow: "rgba(0, 0, 0, 0.5) 0 1px 2px",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "19px",
    margin: "5px",
    width: "calc(100% - 10px)",
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
