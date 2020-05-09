import React from 'react';

// eslint-disable-next-line
const createSvgIcon = Component => ({ size }) => {

  // URL has been given
  if (typeof Component === 'string') {
    function Image (props) {
      return <img src={Component} {...props} />;
    }
    return createSvgIcon(Image);
  }
  return <Component width={size} height={size} />;
};

export default createSvgIcon;
