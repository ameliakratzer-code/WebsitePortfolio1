import "./Projects.css";
import project1 from "/public/images/project1.png";
import project2 from "/public/images/project2.png";
import project3 from "/public/images/project3.png";

const Projects = () => {
  /* projects is an array of project objects*/
  const projects = [
    {
      id: 1,
      title: "ML Interpolation Network",
      description: "Developed a neural network to interpolate ground motion intensity measures for seismic sites.",
      image: project1,
      link: "https://github.com/ameliakratzer-code/HazardCurveIMInterpolation/blob/main/MLHazardCurve.py"
    }, {
      id: 2,
      title: "Python Bilinear Interpolation",
      description: "Implemented a bilinear interpolation algorithm to estimate earthquake hazard curves for target sites.",
      image: project2,
      link: "https://github.com/ameliakratzer-code/HazardCurveIMInterpolation/blob/main/interpolateIM.py"
    }, {
      id: 3,
      title: "Python Visual Selection Sort",
      description: "Developed a Python project that visually demonstrates the selection sort algorithm.",
      image: project3,
      link: "https://drive.google.com/file/d/1U4Mh7I3aWlWBx0VP-VxeFw7BSyf-N-pa/view?usp=sharing"
    }
  ];

  return (
    <div className = "projectWrapper">
    <h1 className="projectHeader">Projects</h1>
    <div className="projectContainer">
      {projects.map((project) => (
        <div key={project.id} className="projectCards">
          <img src={project.image} alt={project.title} className="projectImages" />
          <h3 className="projectTitle">{project.title}</h3>
          <p className="projectDescription">{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectLink">
            View Project
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
