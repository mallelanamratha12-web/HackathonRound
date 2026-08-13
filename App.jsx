import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Sorting Algorithm Visualizer",
      description:
        "An interactive website that visually demonstrates sorting algorithms and compares their performance.",
      technologies: "HTML • CSS • JavaScript • Chart.js",
      category: "Web",
      link: "https://github.com/",
    },
    {
      title: "House Price Prediction",
      description:
        "Machine learning project that predicts house prices using data preprocessing, correlation and linear regression.",
      technologies: "Python • Pandas • NumPy • Machine Learning",
      category: "ML",
      link: "https://github.com/",
    },
    {
      title: "Near-Duplicate Document Detection",
      description:
        "A framework designed to identify documents that are similar or nearly duplicated.",
      technologies: "Python • NLP • Algorithms",
      category: "ML",
      link: "https://github.com/",
    },
    {
      title: "Student Registration System",
      description:
        "A responsive student registration interface with form handling and student list management.",
      technologies: "React • JavaScript • CSS",
      category: "Web",
      link: "https://github.com/",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Namratha<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-content">
          <p className="small-title">HELLO, I'M</p>

          <h1>
            Namratha <span>Sai</span>
          </h1>

          <h2>Computer Science Student & Developer</h2>

          <p className="hero-text">
            I am a passionate B.Tech student interested in web development,
            programming, data science and machine learning. I love building
            useful and creative technology projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          {/* UPDATED SOCIAL LINKS */}
          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/feed"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:mallelanamratha12@gamil.com">
              Email ↗
            </a>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-circle">
            NS
          </div>

          <h3>Namratha Sai</h3>
          <p>B.Tech Student</p>

          <div className="profile-tags">
            <span>Developer</span>
            <span>ML Enthusiast</span>
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">

        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">
          Turning ideas into <span>digital experiences</span>
        </h2>

        <div className="about-grid">

          <div className="about-text">
            <p>
              I am a first-year B.Tech student with a strong interest in
              programming, web development and machine learning.
            </p>

            <p>
              I enjoy learning new technologies and developing projects that
              solve real-world problems. My goal is to continuously improve
              my technical and problem-solving skills.
            </p>

            <div className="stats">
              <div>
                <strong>8.83</strong>
                <span>CGPA</span>
              </div>

              <div>
                <strong>4+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>Technologies</span>
              </div>
            </div>
          </div>

          <div className="about-card">
            <h3>What I Do</h3>

            <div className="service">
              <div className="service-icon">💻</div>
              <div>
                <h4>Web Development</h4>
                <p>Building responsive and interactive websites.</p>
              </div>
            </div>

            <div className="service">
              <div className="service-icon">🤖</div>
              <div>
                <h4>Machine Learning</h4>
                <p>Working with data and predictive models.</p>
              </div>
            </div>

            <div className="service">
              <div className="service-icon">🧩</div>
              <div>
                <h4>Problem Solving</h4>
                <p>Practicing algorithms and data structures.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">

        <p className="section-label">MY SKILLS</p>

        <h2 className="section-title">
          Technologies I <span>work with</span>
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">☕</div>
            <h3>Java</h3>
            <p>OOP • Collections • Exception Handling</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🐍</div>
            <h3>Python</h3>
            <p>Pandas • NumPy • Machine Learning</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <h3>Web</h3>
            <p>HTML • CSS • JavaScript • React</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>Database</h3>
            <p>SQL • PostgreSQL • DBMS</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>Tools</h3>
            <p>Git • GitHub • VS Code</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">📊</div>
            <h3>Data Science</h3>
            <p>Regression • Analytics • Visualization</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <p className="section-label">MY WORK</p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="filter-buttons">

          <button
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>

          <button
            className={filter === "Web" ? "active" : ""}
            onClick={() => setFilter("Web")}
          >
            Web
          </button>

          <button
            className={filter === "ML" ? "active" : ""}
            onClick={() => setFilter("ML")}
          >
            Machine Learning
          </button>

        </div>

        <div className="projects-grid">

          {filteredProjects.map((project, index) => (

            <div className="project-card" key={index}>

              <div className="project-number">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technologies">
                {project.technologies}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project →
              </a>

            </div>

          ))}

        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">

        <p className="section-label">MY JOURNEY</p>

        <h2 className="section-title">
          <span>Education</span>
        </h2>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-date">
                2025 - Present
              </span>

              <h3>B.Tech</h3>

              <h4>
                KL Deemed-to-University, Hyderabad
              </h4>

              <p>
                Currently pursuing B.Tech with focus on computer science,
                programming, data structures and emerging technologies.
              </p>

              <strong>CGPA: 8.83</strong>
            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="timeline-date">
                2024 - 2026
              </span>

              <h3>Intermediate</h3>

              <h4>Telangana Intermediate</h4>

              <p>
                Completed Intermediate education with a strong foundation
                in mathematics and science.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="section">

        <p className="section-label">ACHIEVEMENTS</p>

        <h2 className="section-title">
          Certifications & <span>Learning</span>
        </h2>

        <div className="cert-grid">

          <div className="cert-card">
            <div className="cert-icon">🏆</div>
            <h3>Machine Learning</h3>
            <p>
              Learning machine learning concepts, regression and
              classification.
            </p>
            <span>Machine Learning</span>
          </div>

          <div className="cert-card">
            <div className="cert-icon">💻</div>
            <h3>Web Development</h3>
            <p>
              Developing responsive websites using modern frontend
              technologies.
            </p>
            <span>Web Development</span>
          </div>

          <div className="cert-card">
            <div className="cert-icon">📚</div>
            <h3>Data Structures</h3>
            <p>
              Practicing algorithms, sorting and problem solving.
            </p>
            <span>DSA</span>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <p className="section-label">GET IN TOUCH</p>

        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>

        <p className="contact-intro">
          Have a project idea, internship opportunity or just want to say
          hello? Send me a message.
        </p>

        <div className="contact-grid">

          <div className="contact-info">

            {/* UPDATED EMAIL */}
            <div className="contact-item">
              <div>📧</div>
              <div>
                <h4>Email</h4>
                <a href="mailto:mallelanamratha12@gamil.com">
                  mallelanamratha12@gamil.com
                </a>
              </div>
            </div>

            {/* UPDATED GITHUB */}
            <div className="contact-item">
              <div>💻</div>
              <div>
                <h4>GitHub</h4>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com
                </a>
              </div>
            </div>

            {/* UPDATED LINKEDIN */}
            <div className="contact-item">
              <div>🔗</div>
              <div>
                <h4>LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/feed"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();

              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;

              const subject = `Portfolio Contact from ${name}`;

              const body =
                `Name: ${name}%0D%0A` +
                `Email: ${email}%0D%0A%0D%0A` +
                `Message:%0D%0A${message}`;

              window.location.href =
                `mailto:mallelanamratha12@gamil.com?subject=${encodeURIComponent(
                  subject
                )}&body=${body}`;
            }}
          >

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit" className="primary-btn">
              Send Message →
            </button>

          </form>

        </div>
      </section>

      {/* FOOTER */}
      <footer>

        <div className="logo">
          Namratha<span>.</span>
        </div>

        <p>
          © 2026 Namratha Sai. Built with React.
        </p>

        <div className="footer-links">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/feed"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:mallelanamratha12@gamil.com">
            Email
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;