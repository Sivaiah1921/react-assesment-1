import Enzyme, { EnzymeAdapter, shallow } from 'enzyme'
import Card from './Card';


Enzyme.configure({adapter: new EnzymeAdapter()})



 describe("App component",()=>{
   const data = {
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "george.bluth@reqres.in",
    first_name: "George",
    id: 1,
    last_name: "Bluth"
}
  it('renders without Crash app ', () => {
    const wrapper = shallow(<Card {...data }/>)  
  });
   it('render the props data into the card ',()=>{
       const wrapper = shallow( <Card {...data }/>)
       const text = wrapper.find('.card__content__toggle')
       expect(text).toBe('GeorgeBluth')
   })
  

 })
