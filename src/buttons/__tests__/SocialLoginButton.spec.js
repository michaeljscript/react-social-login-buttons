import * as exportedMembers from '../../';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SocialLoginButton from '../SocialLoginButton';
import Enzyme, { render as renderElement, shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

const render = props => shallow(<SocialLoginButton {...props} />);

describe('SocialLoginButton', () => {
  it('Should render without crash', () => {
    render({});
  });

  it('Should listen to click events', () => {
    const eventMock = jest.fn();
    const button = render({ onClick: eventMock });

    expect(eventMock.mock.calls.length).toBe(0);
    button.simulate('click');
    expect(eventMock.mock.calls.length).toBe(1);
  });

  it('Should listen to mouse enter events', () => {
    const eventMock = jest.fn();
    const button = render({ onMouseEnter: eventMock });

    expect(eventMock.mock.calls.length).toBe(0);
    button.simulate('mouseenter');
    expect(eventMock.mock.calls.length).toBe(1);
  });

  it('Should listen to mouse leave events', () => {
    const eventMock = jest.fn();
    const button = render({ onMouseLeave: eventMock });

    expect(eventMock.mock.calls.length).toBe(0);
    button.simulate('mouseleave');
    expect(eventMock.mock.calls.length).toBe(1);
  });

  it('Should not crash when events fired without listeners', () => {
    const button = render({});
    button.simulate('mouseleave');
    button.simulate('mouseenter');
    button.simulate('click');
  });

  it('Should pass icon size as width and height to the svg element', () => {
    const size = '123px';
    const buttons = Object.values(exportedMembers).filter(member => member instanceof React.Component);

    buttons.forEach(Button => {
      const textWidthPrefix = Button.name + '\'s width: ';
      const textHeightPrefix = Button.name + '\'s width: ';
      const button = renderElement(<Button iconSize={size} />);

      expect(textWidthPrefix + button.find('svg').prop('width')).toBe(textWidthPrefix + size);
      expect(textHeightPrefix + button.find('svg').prop('height')).toBe(textHeightPrefix + size);
    });
  });
});
