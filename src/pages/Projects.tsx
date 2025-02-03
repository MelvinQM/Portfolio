import '../css/Projects.css'
import projectsData from '../data/projects.json'

interface Project {
  id: number,
  name: string,
  description: string,
  skills: string[],
  projectURL?: string,
  githubURL?: string
}

export default function Projects() {
  const projects: Project[] = projectsData
  return (
    <>
      <h1 className='text-center mt-4'>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project"
            style={{ '--i': index } as React.CSSProperties} // Passing index as a CSS variable
          >
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}
