import skills from "../data/skills";

function Skills(){
    return(
        <section id="skills" className="section skills">
            <div className="container">

                <div className="section-top">
                    <div>
                        <p className="section-label">02 — TECHNICAL SKILLS</p>

                        <h2 className="section-title">
                            Capabilities & Tooling
                        </h2>

                        <p className="section-description">
                            A practical collection of technologies and tools
                            I use to design, build and improve digital experiences.
                        </p>
                    </div>

                    <span className="section-status">
                        ● Continuously learning
                    </span>
                </div>

                <div className="skills-grid">

                    {skills.map((skill) => (
                       <div className="skill-card" key={skill.category}>

                        <div className="skill-card-header">
                            <span className="skill-icon">
                                +
                            </span>

                            <span className="skill-index">
                                {skill.category}
                            </span>
                        </div>

                        <h3>{skill.category}</h3>

                        <p>{skill.description}</p>

                        <div className="technology-list">
                            {skill.technologies.map((technology) => (
                               <span key={technology}>
                                  {technology} 
                               </span> 
                            ))}
                        </div>

                       </div> 
                    ))}
                </div>
                
            </div>
        </section>
    );
}

export default Skills;
