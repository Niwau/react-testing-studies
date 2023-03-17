import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

it('should render correctly', () => {
  render(<Greet/>);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});

it('should render with a name', () => {
  render(<Greet name='Guilherme'/>);
  const textElement = screen.getByText('Hello Guilherme');
  expect(textElement).toBeInTheDocument();
});