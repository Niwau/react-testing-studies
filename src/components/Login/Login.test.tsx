import { screen, render } from "@testing-library/react";
import { Login } from "./Login";

describe('Login Button', () => {
  it('should render correctly', () => {
    render(<Login/>)
    const button = screen.getByRole('button', { name: 'Login'});
    expect(button).toBeInTheDocument();
  })

  it('should not render welcome message', () => {
    render(<Login/>);
    const message = screen.queryByRole('heading', { level: 1 });
    expect(message).not.toBeInTheDocument();
  })

})