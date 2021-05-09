import React from 'react';
import App from './App';
import Enzyme, { EnzymeAdapter, shallow } from 'enzyme'

Enzyme.configure({adapter: new EnzymeAdapter()})

test('renders app ', () => {
  const wrapper = shallow(<App />)
  // const x = wrapper.find('.footer')
  // expect(x).toBeInTheDocument('@copyright')

});
