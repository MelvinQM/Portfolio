import { useParams } from 'react-router-dom';
import '../css/ProjectView.css'
import projectsData from '../data/projects.json'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillTag from './SkillTag';

export default function ProjectView() {
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
            <div className='text-muted'>
              <h5 className='text-start'>Description</h5>
              <span className='text-start'>{project.description}</span>
            </div>

            <div className='d-flex align-items-center mt-2'>
              <h5 className='text-muted mb-0'>Status:</h5>
              <span className='ms-1'>{project.status}</span>
            </div>

            <div className='d-flex align-items-center mb-0 mt-2'>
              <h5 className='text-muted mb-0'>Team:</h5>
              <span className='ms-1'>{project.team}</span>
            </div>

            <div className='d-flex gap-2 mt-2'>
              {project.skills?.map((skill, index) => <SkillTag skillName={skill} key={index}/>)}
            </div>
          </div>
        </div>
      </div>

      <div className='project-footer'>
        <a href={project.githubURL}>
          <FontAwesomeIcon className="social-svg" icon={faGithub} />
          <span className='ms-2'>Github Link</span>
        </a>
      </div>

    </div>
  )
}
