import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe('Skills', () => {
  it('should render correctly', () => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    render(<Skills skills={skills}/>)

    const skillsHeading = screen.getByRole('heading', { level: 1 });
    expect(skillsHeading).toBeInTheDocument();

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  })

  it('renders the items correctly', () => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    render(<Skills skills={skills}/>)

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(skills.length);
  })

})