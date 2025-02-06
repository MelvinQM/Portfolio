import { useParams } from "react-router-dom";
import "../css/ProjectView.css";
import projectsData from "../data/projects.json";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillTag from "./SkillTag";
import YoutubeEmbed from "./YoutubeEmbed";
import { Carousel } from "react-bootstrap";
import SocialButton from "./SocialButton";

export default function ProjectView() {
  const { projectId } = useParams<{ projectId: string }>(); // Get projectId from URL
  const project = projectsData.find((p) => p.id === parseInt(projectId || "")); // Find project by ID

  if (!project) {
    return <h1>Project not found</h1>;
  }
  return (
    <div className="project-container">
      <div className="project-header">
        <h1 className="m-1">{project.name}</h1>
      </div>

      <div className="project-content">
        <div className="project-media-container">
          <div className="project-media">
            <Carousel className="w-100" interval={null}>
              {project.media?.map((media, index) => (
                <Carousel.Item className="carousel-media-container" key={index}>
                  {media.type === "video" ? (
                    <YoutubeEmbed className="item" videoId={media.path} />
                  ) : (
                    <img
                      className="item"
                      src={`${import.meta.env.BASE_URL}/assets/${media.path}`}
                      alt="thumbnail"
                    />
                  )}
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="project-info-container">
          <div className="project-info">
            <div>
              <h5 className="text-start text-muted mb-1 mt-auto">
                Description
              </h5>
              <span className="text-start">{project.description}</span>
            </div>

            <div className="mt-2">
              <h5 className="text-start text-muted mb-1 mt-auto">
                My Contribution
              </h5>
              <span className="text-start">{project.contribution}</span>
            </div>

            <div className="mt-2">
              <h5 className="text-muted mb-1 mt-auto">Status:</h5>
              <span className="">{project.status}</span>
            </div>

            <div className="mt-2">
              <h5 className="text-muted mb-1 mt-auto">Team:</h5>
              <span className="">{project.team}</span>
            </div>

            <div className="mt-auto">
              <h5 className="text-muted mb-1 font-bold mt-auto">Skills</h5>
              <div className="d-flex gap-2  flex-wrap m-2">
                {project.skills?.map((skill: SkillObject, index) => (
                  <SkillTag skill={skill} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-footer">
        <SocialButton url={project.githubURL} icon={faGithub} text={"Github Link"}/>
        {project.projectURL && ( <SocialButton url={project.projectURL} icon={faGlobe} text={"Link"}/>)}
      </div>
    </div>
  );
}
