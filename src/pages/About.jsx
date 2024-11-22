import "./About.css";
import pic from "/public/images/picAbout.png";
import cPic from "/public/images/c.png";
import cssPic from "/public/images/css.png";
import htmlPic from "/public/images/html.png";
import matPic from "/public/images/matplot.png";
import pythonPic from "/public/images/python.svg.png";
import scikitPic from "/public/images/scikit.png";
import sqlPic from "/public/images/sql.png";
import tensorPic from "/public/images/tensorflow.png";

const About = () => {
  const skills = [
    {
      /* skills is an array of category objects */
      /* each category has name and items array of skill objects */
      category: "Coding Languages",
      items: [
        { name: "Python", image: pythonPic },
        { name: "C", image: cPic },
        { name: "HTML", image: htmlPic },
        { name: "CSS", image: cssPic },
      ],
    },
    {
      category: "Data Analysis",
      items: [
        { name: "SQL", image: sqlPic },
        { name: "Matplotlib", image: matPic },
      ],
    },
    {
      category: "Machine Learning",
      items: [
        { name: "TensorFlow", image: tensorPic },
        { name: "Scikit-learn", image: scikitPic },
      ],
    },
  ];

  return (
    /* div is main container with sections */
    <div>
      <section>
        <img className="meImage" src={pic} alt="Me" />
      </section>
      <section className="aboutParagraph">
        <p>
          Hi, I’m Amelia, a sophomore studying Information Systems and Software
          Engineering at Carnegie Mellon University.
        </p>
        <p>
          Some of my interests include playing tennis, peer tutoring in computer
          science, and dog sitting.
        </p>
      </section>
      <section className="skills">
        <h1>My Skills</h1>
        <div className="skills-row">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3>{skillCategory.category}</h3>
              <div className="skills-grid">
                {skillCategory.items.map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-image"
                    />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="resume">
        <h1>Connect with Me</h1>
        <div className="links">
          <a
            href="https://drive.google.com/file/d/1aDY1cIa_MI3OOYDreVUdqWYGUyXh_HS1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/amelia-kratzer-08162627b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ameliakratzer-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
