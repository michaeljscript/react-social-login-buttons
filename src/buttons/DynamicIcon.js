import Icon from "./icon";
import React from "react";
import T from "prop-types";

const DynamicIcon = ({ type: Component, size, format, wrapperStyle }) => {
  if (typeof Component === "string") {
    return (
      <div style={{ ...wrapperStyle }}>
        <Icon {...{ format, name: Component, size }} />
      </div>
    );
  }

  return <Component />;
};

DynamicIcon.propTypes = {
  format: T.func,
  size: T.oneOfType([T.number, T.string]),
  type: T.oneOfType([T.string, T.node]),
  wrapperStyle: T.object,
};

export default DynamicIcon;
