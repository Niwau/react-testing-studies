import { screen, render  } from "@testing-library/react" 
import { Application } from "./Application"

describe('Application', () => {
  it('should render correctly', () => {
    render(<Application/>);

    const nameElement = screen.getByRole('textbox', { name: 'Name' });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', { name: 'Bio' });
    expect(bioElement).toBeInTheDocument();

    const jobElement = screen.getByRole('combobox')
    expect(jobElement).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument();

  })
})