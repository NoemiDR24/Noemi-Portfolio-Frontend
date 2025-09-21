import { useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
// import { getProjects } from "../../services/ProjectService.js"; 
import './Projects.css'

function Projects(){
    // const [projects, setProjects] = useState([]);
    // const [selectedProject, setSelectedProject] = useState(null);

    // useEffect(() => {
    //     getProjects()
    //         .then((data) => {
    //             setProjects(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error loading projects:", error);
    //         });
    // }, []);

    const [selectedProject, setSelectedProject] = useState(null);
    const projects = [
        {
            id: 1,
            title: "Blend-r",           
            description: "Full-stack collaborative platform connecting users through shared interests and events. Features comprehensive authentication system, dynamic event management, and personalized user profiles with advanced search capabilities. My contribution: Led backend architecture design, implemented data models and database structure. Developed full-stack search functionality with filtering and matching algorithms. Designed responsive UI components and ensured cross-device compatibility.",
            imageUrl:"/images/blend-r.png",
            technologies: ["Java", "React", "PostgreSQL", "Spring Boot", "HTML","Vite", "CSS"],
            repoUrl: "",
            demoUrl: ""
        },
        {
            id: 2,
            title: "Prince of Peace Baptist Church Website",           
            description: "FA modern, responsive website for Prince of Peace Baptist Church built to connect our community and share our mission.",
            imageUrl:"/images/church.jpg",
            technologies: ["Java", "React", "HTML", "CSS", "Vite"],
            repoUrl: "https://github.com/NoemiDR24/Prince-of-Peace-Baptist-Church-Website",
            demoUrl: ""
        },
        {
            id: 3,
            title: "TEnmo",           
            description: "A command-line application that allows users to send and request virtual money ('TE Bucks') from other users. Includes authentication, secure transactions, and a RESTful API.",
            imageUrl:"/images/tenmo.png",
            technologies: ["Java", "PostgreSQL", "Spring Boot", "HTML","Vite", "CSS" , "JDBC", "REST API"],
            repoUrl: "",
            demoUrl: ""
        },
        {
            id: 4,
            title: "Vendo-Matic 800",           
            description: "A console-based application that simulates a vending machine. Supports product selection, transaction logging, change return, and file-based inventory loading.",
            imageUrl:"/images/vendo-matic.png",
            technologies: ["Java", "Object-Oriented Programming", "File I/O"],
            repoUrl: "",
            demoUrl: ""
        },
        {
            id: 5,
            title: "Number Converter",           
            description: "A tool to convert between binary, hexadecimal, octal, decimal, and Roman numerals.",
            imageUrl:"/images/converter.png",
            technologies: ["Java"],
            repoUrl: "",
            demoUrl: ""
        }
    ];

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