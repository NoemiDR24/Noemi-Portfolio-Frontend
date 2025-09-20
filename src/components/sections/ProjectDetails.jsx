import './ProjectDetails.css'

function ProjectDetails({ project, onClose }) {
  // const technologiesArray = project.technologies 
  //     ? project.technologies.split(",").map((tech) => tech.trim()) 
  //     : [];

  const technologiesArray = project.technologies || [];
  
  return (
    <div className="project-details-container">
      <div className="project-details">
        <button
          className="close-btn"
          onClick={onClose}
        >
          &times;
        </button>

        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-img"
        />

        <h2>{project.title}</h2>
        <p>{project.description}</p>
        
        <div className="links">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              className="demo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          ) : (
            <span className="placeholder-link">🚧 Demo Not Available</span>
          )}

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              className="repo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          ) : (
            <span className="placeholder-link">🔒 Private Code or 🛠️ In Progress</span>
          )}
        </div>

        {project.technologies?.length > 0 && (
          <div className="technologies">
            <h3 className='technologies-title'>Technologies:</h3>
            <ul className='technologies-list'>
              {technologiesArray.map((tech, index) => (
                <li className='tech-tag' key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

export default ProjectDetails;


