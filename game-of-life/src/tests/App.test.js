import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';


describe('App.js -- Rendering strings, arrays and imported modules.', ()=>{
  test('Renders heading', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText('The Splendid Maths');
    expect(titleElement).toBeInTheDocument();
  });
  test('Renders fun fact header', () => {
    const { getByText } = render(<App />);
    const funFactHeader = getByText('Now here is a fun fact about the number');
    expect(funFactHeader).toBeInTheDocument();
  });
});
