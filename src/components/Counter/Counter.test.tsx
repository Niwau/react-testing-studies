import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from '@testing-library/user-event';

describe('Counter', () => {
  it('should render correctly', () => {
    render(<Counter/>);
    const counter = screen.getByRole('heading', { level: 1});
    expect(counter).toBeInTheDocument();
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    expect(incrementButton).toBeInTheDocument();
  })

  it('should render a count of 0', () => {
    render(<Counter/>);
    const counter = screen.getByRole('heading', { level: 1 });
    expect(counter).toHaveTextContent('0');
  })

  it('should have a value of 1 after click', async () => {
    user.setup();
    render(<Counter/>);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const counter = screen.getByRole('heading', { level: 1 });
    await user.click(incrementButton);
    expect(counter).toHaveTextContent('1');
  })

})