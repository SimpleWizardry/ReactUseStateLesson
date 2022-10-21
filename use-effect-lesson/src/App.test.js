import { render, screen } from '@testing-library/react';
import App from './App';
import {useEffect, useState} from "react";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// const [backgroundColor, setBackgroundColor] = useState('red')

// useEffect(() => {
//   window.addEventListener('', resizeHandler)
//   return () => {
//     window.removeEventListener('resize', resizeHandler)
//   }
// }, [])

// const resizeHandler = event => setBackgroundColor(`hsl(${event.target.innerHeight - event.target.innerWidth}, 100%, 50%)`)