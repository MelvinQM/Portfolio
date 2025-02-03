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

    const mediaSrc = project.media?.length ? `/assets/${project.media[0].path}` : "";
    console.log(mediaSrc)
  return (
    <div className='project-container'>
      
      <div className='project-header'>
        <h1 className='m-1'>{project.name}</h1>  
      </div>

      <div className='project-content'>
        <div className='project-media-container'>
          <div className='project-media'>
            <img src={mediaSrc} alt="thumbnail" />
          </div>
        </div>
        
        <div className='project-info-container'>      
          <div className='project-info'>
            <h4 className='text-start m-2'>Description</h4>
            <p className='text-start m-2'>{project.description}</p>
          </div>
        </div>
      </div>


    </div>
  )
}
