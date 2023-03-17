import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe('Greet component', () => {
  it('should render correctly', () => {
    render(<Greet/>);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });
  
  it('should render correctly with a custom name', () => {
    render(<Greet name='Guilherme'/>);
    const textElement = screen.getByText('Hello Guilherme');
    expect(textElement).toBeInTheDocument();
  });
})