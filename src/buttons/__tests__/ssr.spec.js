import * as buttons from '../index';
import React from 'react';
import { renderToString } from 'react-dom/server';

describe('SSR', () => {
  it('Should render without crash', () => {
    Object.values(buttons).forEach((Button, i) => renderToString(<Button />));
  });
});
