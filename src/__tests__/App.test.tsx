import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../App';

describe('App', () => {
  // Sample dummy test.
  it('renders App component', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
