import ProjectListItem from '../components/ProjectListItem'
import './Projects.css'
import projectsData from '../data/projects.json'
import { Outlet } from 'react-router-dom'

export default function Projects() {
  const projects: Project[] = projectsData.map(project => ({
    ...project,
    skills: project.skills || []
  }))

  return (
    <>
      {/* Renders individual project when selected */}
      <div className='project-section'>
        <Outlet />
      </div>
      
      {/* List of all projects */}
      <div className='projects-section'>
        <h1 className='text-center mt-4'>Projects</h1>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectListItem project={project} className="project" key={index}/>
          ))}
        </div>
      </div>
    </>
  )
}
