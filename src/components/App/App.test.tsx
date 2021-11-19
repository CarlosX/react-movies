import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders List Movies', () => {
  render(<App />);
  const linkElement = screen.getByText(/List Movies/i);
  expect(linkElement).toBeInTheDocument();
});
