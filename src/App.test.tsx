import React from 'react';
import App from './App';
import Enzyme, { EnzymeAdapter, mount, shallow } from 'enzyme'
import Home from './components/Home';
import { BsFillBrightnessHighFill, BsMoon } from 'react-icons/bs';


Enzyme.configure({adapter: new EnzymeAdapter()})

const toggle = true


 describe("App component",()=>{

  it('renders without Crash app ', () => {
    const wrapper = shallow(<App />)  
  });
  it('renders home app ', () => {
    const wrapper = shallow(<App />)  
    const Homecomponent = wrapper.find(Home)
    expect(Homecomponent).toHaveLength(1)
  });
  it('header Icons toggle', () => {
    const wrapper = shallow(<App />)  
    expect(wrapper.find(BsFillBrightnessHighFill)).toHaveLength(1)
    wrapper.find('.heading__icon').simulate('click')
    expect(wrapper.find(BsMoon)).toHaveLength(1)
  });
  it('render the footer data',()=>{
    const wrapper = shallow(<App />)
    const footer = wrapper.find('.footer').contains
    expect(footer).toEqual(true)
  })
 })
 describe("passing props",()=>{
  const cardWrapper = mount(<Home toggle={toggle}/>)

  it('accepts the home props ',()=>{
      expect(cardWrapper.props().toggle).toEqual(toggle)
  })
})
