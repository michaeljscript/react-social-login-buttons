import React from 'react';
import T from 'prop-types';
import createButton from './create-button';
import createSvgIcon from './createSvgIcon';

const config = {
    activeStyle: { background: 'rgb(209 96 40)' },
    icon: createSvgIcon(Icon),
    style: { background: 'rgb(230 96 40)' },
    text: 'Log in with Auth0',
};

const Auth0LoginButton = createButton(config);

export default Auth0LoginButton;

function Icon({ width, height, color }) {
    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 291.319 291.319" xstyle="enable-background:new 0 0 291.319 291.319;" xmlSpace="preserve"
        fill={color} width={width} height={height}>

        <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
            fill="#ffff" stroke="none">
            <path d="M375 2988 c-48 -125 -330 -1038 -346 -1116 -29 -151 -29 -368 1 -512
   55 -268 203 -518 416 -704 85 -74 885 -646 904 -646 19 0 819 572 904 646 213
   186 361 436 416 704 31 148 31 352 0 510 -13 71 -84 309 -184 620 l-162 505
   -972 3 c-773 2 -974 0 -977 -10z m1049 -220 c37 -117 103 -324 147 -460 l80
   -248 480 -2 480 -3 -386 -274 c-212 -151 -385 -278 -385 -284 0 -5 65 -214
   145 -465 80 -250 144 -456 142 -458 -2 -2 -177 122 -390 276 l-387 279 -387
   -279 c-213 -154 -388 -278 -390 -276 -2 2 62 208 142 458 80 251 145 460 145
   465 0 6 -173 133 -385 284 l-386 274 480 3 480 2 80 248 c44 136 110 343 148
   460 37 116 70 212 73 212 3 0 36 -96 74 -212z"/>
        </g>
    </svg>
}

Icon.propTypes = {
  width: T.oneOfType([T.number, T.string]),
  height: T.oneOfType([T.number, T.string]),
};
