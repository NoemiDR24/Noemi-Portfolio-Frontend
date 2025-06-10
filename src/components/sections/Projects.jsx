import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import { getProjects } from "../../services/ProjectService.js"; 
import './Projects.css'

function Projects(){
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        getProjects()
            .then((data) => {
                setProjects(data);
            })
            .catch((error) => {
                console.error("Error loading projects:", error);
            });
    }, []);


    return (
        <section className="projects-section" id="projects">
            <div className="container">

                <div>
                    <h4>03</h4>
                    <h1 className="size-50">My <br /> Projects</h1> 
                </div>
                
                <div className="projects-grid">
                    {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                    ))}
                </div>

                {selectedProject && (
                    <ProjectDetails
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                    />
                )}
                        
            </div>
        </section>
    )
}

export default Projects;