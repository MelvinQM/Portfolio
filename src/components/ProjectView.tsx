import { useParams } from 'react-router-dom';
import '../css/ProjectView.css'
import projectsData from '../data/projects.json'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillTag from './SkillTag';
import YoutubeEmbed from './YoutubeEmbed';
import { Carousel } from 'react-bootstrap';

export default function ProjectView() {
    const { projectId } = useParams<{ projectId: string }>(); // Get projectId from URL
    const project = projectsData.find(p => p.id === parseInt(projectId || '')); // Find project by ID
    console.log(project)
    if (!project) {
        return <h1>Project not found</h1>
    }

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
    <div className='project-container'>
      
      <div className='project-header'>
        <h1 className='m-1'>{project.name}</h1>  
      </div>

      <div className='project-content'>
        <div className='project-media-container'>
          <div className='project-media'>
            <Carousel className='w-100' interval={null}>
              {project.media?.map((media, index) => (
                <Carousel.Item className="carousel-media-container" key={index}>
                  {media.type === 'video' ? (
                    <YoutubeEmbed className="item" videoId={media.path} key={index} />
                  ) : (
                    <img className="item" src={`/assets/${media.path}`} alt="thumbnail" key={index} />
                  )}
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
        
        <div className='project-info-container'>      
          <div className='project-info'>
            <div>
              <h5 className='text-start text-muted'>Description</h5>
              <span className='text-start'>{project.description}</span>
            </div>

            <div className='mt-2'>
              <h5 className='text-muted mb-0'>Status:</h5>
              <span className=''>{project.status}</span>
            </div>

            <div className='mt-2'>
              <h5 className='text-muted mb-0'>Team:</h5>
              <span className=''>{project.team}</span>
            </div>

            <div className='d-flex gap-2 mt-auto flex-wrap m-2'>
              {project.skills?.map((skill, index) => <SkillTag skillName={skill} key={index}/>)}
            </div>
          </div>
        </div>
      </div>

      <div className='project-footer'>
        <button onClick={() => window.location.href = project.githubURL} className="project-footer-button">
          <FontAwesomeIcon icon={faGithub} />
          <span className='ms-2'>Github Link</span>
        </button>
      </div>

    </div>
  )
}
