import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe('Counter', () => {
  it('should render correctly', () => {
    render(<Counter/>);
    const counter = screen.getByRole('heading', { level: 1});
    expect(counter).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', { name: 'Increment'});
    expect(incrementButton).toBeInTheDocument();
  })
})