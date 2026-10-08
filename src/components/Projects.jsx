import projects from "../data/projects";

function Projects(){
    return(
        <section className="section" id="projects">
           
            <div className="container">
           
                <div className="section-top">
                    <div>
                        <p className="section-label">03 — SELECTED WORK</p>
                        <h2 className="section-title">
                            Projects I've Built
                        </h2>
                        <p className="section-description">
                            A selection of real-world projects I've worked on
                            across web development and digital experiences.
                        </p>
                    </div>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article 
                        className={`project-card ${index === 0 ? 'project-featured' : ''}`}
                        key={project.title}
                        >
                            <div className="project-image">

                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                />
                                </div>

                            <div className="project-content">

                                <div className="project-heading">
                                    <div>
                                        <span className="project-number">
                                            0{index + 1}
                                        </span>

                                        <h3>{project.title}</h3>
                                    </div>

                                    
                                    <a 

                                    href={project.link} 
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        Visit Site
                                        <span>{`↗`}</span>
                                    </a>
                                </div>

                                <p>
                                    {project.description}
                                </p>

                                <div className="project-technologies">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>

                            </div>

                        </article>

                    ))}    
                    
                </div>

            </div>
        </section>
    );
}

export default Projects;