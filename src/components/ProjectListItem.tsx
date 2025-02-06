import { useNavigate } from "react-router-dom";
import SkillTag from "./SkillTag";

export default function ProjectListItem({ project, className }: { project: Project, className: string })
{
    const navigate = useNavigate();
    const handleProjectClick = (projectId: number) => {
        window.scrollTo(0, 0);
        navigate(`/portfolio-website/projects/${projectId}`);
    };

    return (
        <div
            key={project.id}
            style={{ '--i': project.id } as React.CSSProperties}
            onClick={() => handleProjectClick(project.id)}
            className={className}
            >
            <h2 className="text-center">{project.name}</h2>
            <img src={`/portfolio-website/assets/${project.thumbnailPath || "img/thumbnails/placeholder.jpg"}`} alt="thumbnail" />

            <div className="mb-4 mt-4 d-flex flex-wrap gap-2">
                {project.skills?.map((skill, index) => <SkillTag skill={skill} key={index} />)}
            </div>
        </div>
    )
}