import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders the App component and console logs it.', ()=>{
  const wrapper = shallow(<App />);
  console.log(`===\n${wrapper.debug()}\n===`);
});
