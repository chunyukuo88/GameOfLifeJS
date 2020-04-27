import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App.js -- Rendering strings, arrays and imported modules.', ()=>{
  test('Renders heading', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText('Chunyu Kuo\'s Site');
    expect(titleElement).toBeInTheDocument();
  });
  test('Renders grid', ()=>{
    const { getByText } = render(<App />);
    const  gridElement = getByText('[[0,0],[0,0]]');
    expect(gridElement).toBeInTheDocument();
  });
  test('Renders math fact', ()=>{
    const { getByText } = render(<App />);
    const  mathFact = getByText('26');
    expect(mathFact).toBeInTheDocument();
  });

});
