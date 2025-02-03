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
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}
