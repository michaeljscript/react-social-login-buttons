import React from 'react';
import T from 'prop-types';
import createButton from './create-button';
import createSvgIcon from './createSvgIcon';

const config = {
  activeStyle: { background: '#ac3ade' },
  icon: createSvgIcon(Icon),
  style: { background: '#720E9E' },
  text: 'Log in with Yahoo',
};

const YahooLoginButton = createButton(config);

export default YahooLoginButton;

function Icon({ width, height, color }) {
  return <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 291.319 291.319" style="enable-background:new 0 0 291.319 291.319;" xml:space="preserve">
<g>
 <path style="fill:#720E9E;" d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66c0,80.45-65.21,145.659-145.66,145.659
     S0,226.109,0,145.66C0,65.219,65.21,0,145.659,0z"/>
 <path style="fill:#FFFFFF;" d="M212.353,114.98l0.155-0.027l4.825-5.371l-0.237-0.018l0.51-0.801h-67.595l2.604,9.249h18.444
     l-31.044,28.722c-6.336-9.24-21.184-30.479-31.544-46.411h19.254v-6.555l0.264-1.884l-0.264-0.036v-0.765H54.631v9.24H77.49
     c8.876,7.328,47.358,54.049,48.76,58.51c0.564,4.179,1.366,28.841-0.291,30.698c-1.994,2.868-22.814,1.32-26.483,1.593
     l-0.137,9.058c6.7,0.2,26.801-0.009,33.584-0.009c13.364,0,36.77-0.346,40.065-0.082l0.41-8.576l-26.901-0.401
     c-0.564-3.887-1.183-28.422-0.619-31.098c2.54-7.765,43.816-39.902,48.059-41.112l3.997-0.901h12.472
     C210.405,118.002,212.353,114.98,212.353,114.98z M202.266,179.079l11.689,0.892l13.628-49.979
     c-2.276-0.082-22.95-1.93-25.636-2.431L202.266,179.079z M200.245,187.091l0.064,12.208l5.917,0.492l6.391,0.446l1.875-11.944
     l-6.737-0.31C207.756,187.983,200.245,187.091,200.245,187.091z"/>
</g>
</svg>
}

Icon.propTypes = {
  width: T.oneOfType([T.number, T.string]),
  height: T.oneOfType([T.number, T.string]),
};
