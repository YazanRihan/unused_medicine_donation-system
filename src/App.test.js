import { render, screen } from '@testing-library/react'; // Importing the `render` and `screen` functions from the `@testing-library/react` package
import App from './App'; // Importing the `App` component from the `./App` file

test('renders learn react link', () => { // Defining a test case with a descriptive name
  render(<App />); // Rendering the `App` component using the `render` function
  const linkElement = screen.getByText(/learn react/i); // Finding an element that contains the text 'learn react' using the `getByText` function from the `screen` object
  expect(linkElement).toBeInTheDocument(); // Asserting that the `linkElement` is in the document using the `toBeInTheDocument` function from the `expect` object
});
