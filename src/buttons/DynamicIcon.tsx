import Icon from "./icon";
import React from "react";

type Props = {
  type: string | React.ComponentType<{ size: string | number; color: string }>;
  size: string | number;
  format: (name: string) => string;
  color?: string;
};

export const DynamicIcon = ({ type: Component, size, format, color = "#FFFFFF" }: Props) => {
  const renderIElement = typeof Component === "string";

  return renderIElement ? (
    <Icon {...{ format, name: Component, size }} />
  ) : (
    <Component size={size} color={color} />
  );
};

