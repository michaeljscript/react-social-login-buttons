import * as buttons from '../src/buttons';
import { FacebookLoginButton } from '../src';
import React, { useState } from 'react';
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
  }).add('Disabled button', () => {
    const [_disabled, setDisabled] = useState(true);

    const config = {
      activeStyle: { background: '#293e69' },
      icon: 'facebook',
      iconFormat: name => `fa fa-${name}`,
      style: { background: '#3b5998' },
      text: 'Log in with Facebook',
      disabled: true,
      onClick: () => alert('this custom button should be disabled and this should not trigger'),
    };

    const toggleDisable = () => setDisabled(!_disabled);

    /** My Facebook login button. */
    const MyFacebookLoginButton = createButton(config);

    return (
      <>
        <MyFacebookLoginButton disabled={_disabled}>{_disabled ? 'Disabled' : 'Enabled'}</MyFacebookLoginButton>
        <hr/>
        <button onClick={toggleDisable}>Toggle</button>
      </>
    );
  });


function AllButtons () {
  const components = Object.values(buttons).filter(e => e !== buttons.createButton && e !== buttons.createSvgIcon);
  return (<div style={{ display: 'flex', flexWrap: 'wrap' }}>{components.map((Button, i) => (<div key={i} style={{ width: '30%' }}>
    <Button onClick={() => alert('hello')} />
  </div>))}</div>);
}
