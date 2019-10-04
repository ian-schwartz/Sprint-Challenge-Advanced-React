import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import { useDarkMode } from './hooks/useDarkMode';

test('renders without crashing', () => {
  render(<App />);
});

test('Heading is found', () => {
  const { getByText } = render(<App />);
  getByText(/soccer/);
});

test('Player is found', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/player/);
});

// test('clicking toggle renders darkmode', () => {
//   let actual;
//   let expected;
//   actual = useDarkMode()
// })

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
