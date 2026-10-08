function Hero() {
    return(
        <section className="hero" id="home">
           
            <div className="container hero-container">
               
                <div className="hero-content">
                   
                    <p className="hero-eyebrow">
                        SOFTWARE ENGINEERING STUDENT . FRONTEND DEVELOPER
                    </p>
                   
                    <h1>MUHAMMAD  
                        <span>MUDDASSIR</span>
                        FARHAN
                    </h1>
                   
                    <p className="hero-description">
                        I build responsive, modern web experiences with clean
                        frontend architecture and practical engineering principles.
                    </p>
                   
                    <div className="hero-buttons">
                        <a href="#projects" className="button button-primary">
                            View My Work →
                        </a>
                   
                        <a href="#contact" className="button button-secondary">
                            Let's Connect
                        </a>
                    </div>
                   
                    <div className="hero-meta">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>React</span>
                    </div>
                   
                </div>    

                <div className="hero-code">
                    
                    <div className="code-header">
                        <div className="code-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <span>Portfolio.jsx</span>
                    </div>

                    <div className="code-content">
                        <p>
                            <span className="code-number">01</span>
                            <span className="code-keywords">const</span>{" "}
                            developer = {"{"}
                        </p>

                        <p>
                            <span className="code-number">02</span>
                            &nbsp;&nbsp;name:{" "}
                            <span className="code-string">
                                "Muhammad Muddassir"
                            </span>,
                        </p>

                        <p>
                            <span className="code-number">03</span>
                            &nbsp;&nbsp;role:{" "}
                            <span className="code-string">"Frontend Developer"</span>,
                        </p>

                        <p>
                            <span className="code-number">04</span>
                            &nbsp;&nbsp;focus:{" "}
                            <span className="code-string">"Software Engineering"</span>,
                        </p>

                        <p>
                            <span className="code-number">05</span>
                            &nbsp;&nbsp;lerning:{" "}
                            <span className="code-string">"AI + Modern Web"</span>,
                        </p>

                        <p>
                            <span className="code-number">06</span>
                            {"};"}
                        </p>
                    </div>

                    <div className="code-footer">
                        <span>● Available for opportunities</span>
                        <span>React • JavaScript</span>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;