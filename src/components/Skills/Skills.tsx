interface SkillsProps {
  skills: string[]
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {
          skills.map(skill => <li key={skill}>{skill}</li>)
        }
      </ul>
    </div>
  )
}
