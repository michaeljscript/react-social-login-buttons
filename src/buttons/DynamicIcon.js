import Icon from './icon';
import React from 'react';
import T from 'prop-types';

const DynamicIcon = ({ type: Component, size, format }) => {
  const renderIElement = typeof Component === 'string';

  return renderIElement ? <Icon {...{ format, name: Component, size }} /> : <Component size={size} />;
};

DynamicIcon.propTypes = {
  format: T.func,
  size: T.oneOfType([T.number, T.string]),
  type: T.oneOfType([T.string, T.node, T.func]),
};

export default DynamicIcon;
