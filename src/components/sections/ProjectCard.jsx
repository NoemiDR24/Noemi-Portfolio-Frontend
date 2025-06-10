import './ProjectCard.css'

function ProjectCard({ project, onClick }) {
    
  return (
    <div className="project-card" onClick={onClick}>
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-img"
      />
      <div className="card-content">
        <h3>{project.title}</h3>
      </div>
    </div>
  );
}

export default ProjectCard;