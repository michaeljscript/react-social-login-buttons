import * as buttons from '../src/buttons';
import { FacebookLoginButton } from '../src';
import React from 'react';
import createButton from '../src/buttons/create-button';
import { storiesOf } from '@storybook/react';


//eslint-disable-next-line
storiesOf("Social login buttons", module)
  .addDecorator(story => <div style={{ fontFamily: 'sans-serif' }}>{story()}</div>)
  .add('All buttons', () => <AllButtons />)
  .add('With custom content', () => (
    <FacebookLoginButton>
      <span>Custom text</span>
    </FacebookLoginButton>
  ))
  .add('Custom button', () => {
    const config = {
      activeStyle: { background: '#293e69' },
      icon: 'facebook',
      iconFormat: name => `fa fa-${name}`,
      style: { background: '#3b5998' },
      text: 'Log in with Facebook',
    };
    /** My Facebook login button. */
    const MyFacebookLoginButton = createButton(config);
    return <MyFacebookLoginButton>Hello</MyFacebookLoginButton>;
  });


function AllButtons() {
  const components = Object.values(buttons);
  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{components.map((Button, i) => <div key={i} style={{ width: '30%' }}>
    <Button onClick={() => alert('hello')} />
  </div>)}</div>
}