import { useNavigate } from "react-router-dom";

export default function ProjectListItem({ project, className }: { project: Project, className: string })
{
    const navigate = useNavigate();
    const handleProjectClick = (projectId: number) => {
        navigate(`/projects/${projectId}`);
    }

    return (
        <div
            key={project.id}
            style={{ '--i': project.id } as React.CSSProperties}
            onClick={() => handleProjectClick(project.id)}
            className={className}
            >
            <h2>{project.name}</h2>
            <img src={`/../assets/${project.thumbnailPath || "img/thumbnails/placeholder.jpg"}`} alt="thumbnail" />
            <p className='text-start'>Project summary</p>
        </div>
    )
}