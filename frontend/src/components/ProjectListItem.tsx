import { useNavigate } from "react-router-dom";
import SkillTag from "./SkillTag";
import './ProjectListItem.css'

export default function ProjectListItem({ project, className }: { project: Project, className: string })
{
    const navigate = useNavigate();
    const handleProjectClick = (projectId: number) => {
        window.scrollTo(0, 0);
        navigate(`/projects/${projectId}`);
    };

    return (
        <div
            key={project.id}
            style={{ '--i': project.id } as React.CSSProperties}
            onClick={() => handleProjectClick(project.id)}
            className={className + " list-item"}
            >
            <h2 title={project.name}>{project.name}</h2>
            <img src={`/assets/${project.thumbnailPath || "img/thumbnails/placeholder.jpg"}`} alt="thumbnail" />
            
            <div className="skills-container pt-4">
                {project.skills?.map((skill, index) => <SkillTag skill={skill} key={index} />)}
            </div>
        </div>
    )
}