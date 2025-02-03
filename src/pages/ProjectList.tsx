import '../css/ProjectList.css'
import projectsData from '../data/projects.json'
import { Outlet, useNavigate } from 'react-router-dom'

export default function ProjectList() {
  const projects: Project[] = projectsData
  const navigate = useNavigate(); // Initialize useNavigate

  const handleProjectClick = (projectId: number) => {
    navigate(`/projects/${projectId}`); // Navigate to the project details page
  }

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
            <div
              key={index}
              className="project"
              style={{ '--i': index } as React.CSSProperties} // Passing index as a CSS variable
              onClick={() => handleProjectClick(project.id)} // Handle click to navigate
              >
              <h2>{project.name}</h2>
              <img src={`/../assets/${project.thumbnailPath || "thumbnails/placeholder.jpg"}`} alt="thumbnail" />
              <p className='text-start'>Project summary</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
