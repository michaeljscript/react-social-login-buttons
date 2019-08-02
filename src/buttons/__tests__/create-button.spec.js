import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import createButton from '../create-button';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('createButton', () => {
  it('should return a function', () => {
    expect(typeof createButton({})).toBe('function');
  });

  it('should render react element', () => {
    const Button = createButton({});
    shallow(<Button />);
  });

  it('should render SocialLoginButton', () => {
    const Button = createButton({
      foo: 'bar',
    });
    const button = shallow(<Button />);

    const wrapper = button.find('SocialLoginButton');
    expect(wrapper.length).toBe(1);
  });

  it('should pass props to SocialLoginButton', () => {
    const Button = createButton({
      foo: 'bar',
    });
    const button = shallow(<Button />);

    const wrapper = button.find('SocialLoginButton');
    expect(wrapper.props().foo).toBe('bar');
  });

  it('should pass style props to SocialLoginButton', () => {
    const Button = createButton({});
    const button = shallow(<Button />);

    const wrapper = button.find('SocialLoginButton');
    expect(wrapper.props().style).toBeDefined();
    expect(wrapper.props().activeStyle).toBeDefined();
  });
});
