import React from 'react';
import T from 'prop-types';
import createButton from './create-button';
import createSvgIcon from './createSvgIcon';

const config = {
  activeStyle: {
    background: '#0088cc',
  },
  icon: createSvgIcon(Icon),
  style: {
    background: '#54a9eb',
  },
  text: 'Log in with Telegram',
};

const TelegramLoginButton = createButton(config);
export default TelegramLoginButton;

function Icon({ width, height, color }) {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width={width} height={height} style={{ transform: 'scale(1.5)' }}>
      <defs>
        <linearGradient id="b" x1=".66" x2=".851" y1=".437" y2=".802">
          <stop offset="0" stopColor="#eff7fc" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
      </defs>
      <circle cx="120" cy="120" r="120" fill="url(#a)" />
      <path fill="#c8daea" d="M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80" />
      <path fill="#a9c9dd" d="M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035" />
      <path fill="url(#b)" d="M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258" />
    </svg>
  )
}

Icon.propTypes = {
  width: T.oneOfType([T.number, T.string]),
  height: T.oneOfType([T.number, T.string]),
};
