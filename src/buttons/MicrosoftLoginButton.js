import React from 'react';
import T from 'prop-types';
import createButton from './create-button';
import createSvgIcon from './createSvgIcon';

const config = {
  activeStyle: { background: 'rgb(0, 137, 255)' },
  icon: createSvgIcon(Icon),
  style: { background: 'rgb(50, 159, 253)' },
  text: 'Log in with Microsoft',
};

const MicrosoftLoginButton = createButton(config);

export default MicrosoftLoginButton;

function Icon({ width, height, color }) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 480 480">
    <g>
      <path d="M0.176,224L0.001,67.963l192-26.072V224H0.176z M224.001,37.241L479.937,0v224H224.001V37.241z M479.999,256l-0.062,224   l-255.936-36.008V256H479.999z M192.001,439.918L0.157,413.621L0.147,256h191.854V439.918z" fill={color} />
    </g>
  </svg>);
}

Icon.propTypes = {
  width: T.oneOfType([T.number, T.string]),
  height: T.oneOfType([T.number, T.string]),
};
