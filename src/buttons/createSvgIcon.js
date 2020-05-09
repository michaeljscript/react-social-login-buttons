import React from 'react';

// eslint-disable-next-line
const createSvgIcon = Component => ({ size, color }) => {

  // URL has been given
  if (typeof Component === 'string') {
    function Image (props) {
      return <img src={Component} {...props} />;
    }
    return createSvgIcon(Image);
  }
  return <Component width={size} height={size} color={color} />;
};

export default createSvgIcon;
