import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';


describe('App.js -- Rendering strings, arrays and imported modules.', ()=>{
  test('Renders heading', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText('Chunyu Kuo\'s Site');
    expect(titleElement).toBeInTheDocument();
  });
  test('Renders fun fact header', () => {
    const { getByText } = render(<App />);
    const funFactHeader = getByText('Now here is a fun fact about the number');
    expect(funFactHeader).toBeInTheDocument();
  });
  test('Renders grid', ()=>{
    const { getByText } = render(<App />);
    const  gridElement = getByText('[[0,0],[0,0]]');
    expect(gridElement).toBeInTheDocument();
  });
  test('Renders math fact', async ()=>{
    const { getByText } = render(<App />);
    const MathFact = await getByText('0 is the additive identity.');
    expect(MathFact).toBeInTheDocument();
  });

});