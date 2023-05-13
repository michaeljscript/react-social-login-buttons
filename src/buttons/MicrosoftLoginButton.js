import React from 'react';
import T from 'prop-types';
import createButton from './create-button';
import createSvgIcon from './createSvgIcon';

const config = {
  activeStyle: { background: '#555555' },
  icon: createSvgIcon(Icon),
  style: { background: '#333333' },
  text: 'Log in with Microsoft',
};

const MicrosoftLoginButton = createButton(config);

export default MicrosoftLoginButton;

function Icon ({ width, height, color }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} x="0px" y="0px"
    viewBox="0 0 48 48">
    <path fill="#ff5722" d="M6 6H22V22H6z" transform="rotate(-180 14 14)" />
    <path fill="#4caf50" d="M26 6H42V22H26z" transform="rotate(-180 34 14)" />
    <path fill="#ffc107" d="M26 26H42V42H26z" transform="rotate(-180 34 34)" />
    <path fill="#03a9f4" d="M6 26H22V42H6z" transform="rotate(-180 14 34)" />
  </svg>);
}

Icon.propTypes = {
  width: T.oneOfType([T.number, T.string]),
  height: T.oneOfType([T.number, T.string]),
};
