import Icon from './icon';
import React from 'react';
import T from 'prop-types';

const DynamicIcon = ({ type: Component, size, format, color = '#FFFFFF' }) => {
  const renderIElement = typeof Component === 'string';

  return renderIElement ? <Icon {...{ format, name: Component, size }} /> : <Component size={size} color={color} />;
};

DynamicIcon.propTypes = {
  format: T.func,
  size: T.oneOfType([T.number, T.string]),
  type: T.oneOfType([T.string, T.node, T.func]),
  color: T.string,
};

export default DynamicIcon;
