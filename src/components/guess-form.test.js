import React from 'react';

import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('contains a form', () => {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.find('form').length).toEqual(1);
  });
  
  // it('should execute callback on form submit', () => {
  //   const callback = jest.fn();
  //   const wrapper = mount(<GuessForm onGuess={callback}/>);
  //   wrapper.find('form').simulate('submit');
  //   expect(callback).toHaveBeenCalled();
  // });

  it('should fire onMakeGuess callback when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = 10;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  });

  it('should reset input when form is submitted', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 10;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
});