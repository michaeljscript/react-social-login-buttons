import React from 'react';
import T from 'prop-types';
import createButton from './create-button';
import createSvgIcon from './createSvgIcon';

const config = {
  activeStyle: { background: '#1171BB' },
  icon: createSvgIcon(Icon),
  style: { background: '#168EEA' },
  text: 'Login with Buffer',
};

const BufferLoginButton = createButton(config);

export default BufferLoginButton;


function Icon ({ width, height, color }) {
  return <svg aria-labelledby="simpleicons-buffer-icon" role="img" viewBox="0 0 24 24" width={width} height={height} xmlns="http://www.w3.org/2000/svg"><path d="M23.784 18.24c.287.142.287.267 0 .374l-11.357 5.223c-.287.145-.57.145-.854 0L.213 18.614c-.284-.107-.284-.232 0-.375l2.722-1.23c.284-.14.57-.14.852 0l7.787 3.573c.285.14.57.14.854 0l7.787-3.574c.283-.14.568-.14.852 0l2.717 1.23zm0-6.454c.287.143.287.285 0 .426L12.427 17.44c-.287.104-.57.104-.854 0L.213 12.21c-.284-.143-.284-.284 0-.426l2.722-1.227c.284-.144.57-.144.852 0l7.787 3.57c.285.144.57.144.854 0l7.787-3.57c.283-.144.568-.144.852 0l2.717 1.226zM.214 5.76c-.285-.143-.285-.267 0-.375L11.574.16c.283-.14.57-.14.852 0l11.358 5.23c.287.107.287.232 0 .375l-11.357 5.223c-.287.143-.57.143-.854 0L.213 5.76z" fill={color} /></svg>;
}

Icon.propTypes = {
  width: T.oneOfType([T.number, T.string]),
  height: T.oneOfType([T.number, T.string]),
};
