import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import GuessCount from './guess-count';

describe('<GuessCount />', ()=> {
  it('renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('displays guess count value', () => {
    const guessCount = 15;
    const wrapper = mount(<GuessCount guessCount={guessCount} />);
    expect(wrapper.text()).toEqual(`You've made ${guessCount} guesses!`);
  })
})