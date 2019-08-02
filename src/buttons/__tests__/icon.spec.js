import Adapter from 'enzyme-adapter-react-16';
import Icon from '../icon';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

const render = props => shallow(<Icon {...props} />);

describe('icon', () => {
  it('Should render without crash', () => {
    render({ name: 'test' });
  });

  it('Should give a className from format function', () => {
    const className = 'foo';
    const wrapper = render({ format: () => className, name: 'test' });
    const i = wrapper.find('i');
    expect(i.hasClass(className)).toBe(true);
  });

  it('Should call the format function with name as a param', () => {
    const fn = jest.fn();
    const name = 'test';
    render({ format: fn, name });
    expect(fn.mock.calls.length).toBe(1);
    expect(fn.mock.calls[0][0]).toBe(name);
  });
});
