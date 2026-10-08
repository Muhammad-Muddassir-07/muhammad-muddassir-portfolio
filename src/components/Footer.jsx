function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            MMF
          </a>

          <div>
            <h3>Muhammad Muddassir Farhan</h3>
            <p>Software Engineering Student • Frontend Developer</p>
          </div>
        </div>

        <nav className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials">
          <a
            href="https://github.com/Muhammad-Muddassir-07"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-muddassir-farhan"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} Muhammad Muddassir Farhan.
          All rights reserved.
        </p>

        <span>
          Built with React
        </span>
      </div>
    </footer>
  );
}

export default Footer;