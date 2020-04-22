import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Grid from '../Grid';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Alex/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders grid', ()=> {
  const { getByText } = render(<Grid />);
  const gridElement = getByText([0,0,0]);
  expect(gridElement).toBeInTheDocument();
});