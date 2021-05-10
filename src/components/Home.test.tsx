import Enzyme, { EnzymeAdapter, mount, shallow } from 'enzyme'
import Home from './/Home';
import Card from './Card';


Enzyme.configure({adapter: new EnzymeAdapter()})


const data = {
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "george.bluth@reqres.in",
    first_name: "George",
    id: 1,
    last_name: "Bluth"
}
const toggle = true

 describe("App component",()=>{

    const getDataCall = jest.fn()

  it('renders without Crash app ', () => {
    const wrapper = shallow(<Home />)  
  });
  it('renders home app ', () => {
    const wrapper = shallow(<Home/>)  
    const Homecomponent = wrapper.find(Card)
    expect(Homecomponent).toHaveLength(1)
  });

  it('run the Effect onces when getcalldata ',()=>{
      expect(getDataCall).toBeCalledTimes(1)
  })

 })

 describe("passing props",()=>{
     const cardWrapper = mount(<Card item={data} toggle={toggle}/>)

     it('accepts the home props ',()=>{
         expect(cardWrapper.props().item).toEqual(data)
     })
 })