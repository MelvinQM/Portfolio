import { useParams } from 'react-router-dom';
import '../css/Project.css'
import projectsData from '../data/projects.json'

export default function Project() {
    const { projectId } = useParams<{ projectId: string }>(); // Get projectId from URL
    const project = projectsData.find(p => p.id === parseInt(projectId || '')); // Find project by ID
    console.log(project)
    if (!project) {
        return <h1>Project not found</h1>
    }

  return (
    <div className='project-container'>
      
      <div className='project-media'>
        <h1>Media</h1>
        <img src={`/../assets/thumbnails/${project.thumbnailPath}`} alt="thumbnail" />
      </div>
      
      <div className='project-info'>      
        <h1>{project.name}</h1>  
        <h1>{project.description}</h1>
      </div>

    </div>
  )
}
