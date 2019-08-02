import React from 'react';
import T from 'prop-types';

const Icon = ({ name, size, format }) => {
  return <i className={format(name)} style={{ fontSize: size }} />;
};

Icon.propTypes = {
  format: T.func,
  name: T.string.isRequired,
  size: T.oneOfType([T.string, T.number]).isRequired,
};

Icon.defaultProps = {
  format: name => `demo-icon icon-${name}`,
  size: 26,
};

export default Icon;
