import React from "react";
import T from "prop-types";

const Icon = ({ name, size = 26, format = name => `demo-icon icon-${name}` }) => (
    <i className={format(name)} style={{ fontSize: size }} />
);

Icon.propTypes = {
    format: T.func,
    name: T.string.isRequired,
    size: T.oneOfType([T.string, T.number]).isRequired,
};

export default Icon;
