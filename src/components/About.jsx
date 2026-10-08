function About() {
  return (
    <section id="about" className="section about">
      <div className="container">

        {/* Section heading */}
        <div className="section-label">
          01 — ABOUT
        </div>

        <div className="about-container">

          {/* Left side */}
          <div className="about-title">
            <h2>
              Dedicated to crafting clean code,
              robust architecture, and seamless
              user experiences.
            </h2>
          </div>

          {/* Right side */}
          <div className="about-content">

            <p className="about-description">
              I am a Software Engineering student at
              Sindh Madressatul Islam University with
              practical experience in frontend development,
              web development, and building responsive
              digital experiences.
            </p>

            <p className="about-description">
              I enjoy turning ideas into clean, usable
              interfaces while continuously improving my
              software engineering and problem-solving skills.
            </p>

            <div className="about-cards">

              <div className="about-card">
                <span className="card-label">
                  Education
                </span>

                <h3>
                  BS Software Engineering
                </h3>

                <p>
                  Sindh Madressatul Islam University
                </p>
              </div>

              <div className="about-card">
                <span className="card-label">
                  Focus
                </span>

                <h3>
                  Frontend & Software Engineering
                </h3>

                <p>
                  Building modern and responsive web experiences.
                </p>
              </div>

              <div className="about-card">
                <span className="card-label">
                  Experience
                </span>

                <h3>
                  4+ Years
                </h3>

                <p>
                  Practical web development and freelance work.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;