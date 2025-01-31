import React, { useState } from "react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Uniform Distribution and School Supplies Initiative",
      description:
        "Edukit Nigeria provided school uniforms, bags, and stationery to students at Hope Academy, Oyo State.",
      img: require("./project.1.png"),
    },
    {
      id: 2,
      title: "Community Fundraising Drive",
      description:
        "Edukit Nigeria hosted an engaging fundraising drive to generate support for it’s mission.",
      img: require("./project.2.png"),
    },
    {
      id: 3,
      title: "Community Library Setup",
      description:
        "Edukit Nigeria established a community library at Unity Secondary School in Sokoto State, Nigeria.",
      img: require("./project.3.png"),
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui ultrices, nec ultricies nunc varius.",
      img: require("./project.3.png"),
    },
    {
      id: 5,
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui ultrices, nec ultricies nunc varius.",
      img: require("./project.3.png"),
    },
    {
      id: 6,
      title: "Project 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui ultrices, nec ultricies nunc varius.",
      img: require("./project.3.png"),
    },
    {
      id: 7,
      title: "Project 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui ultrices, nec ultricies nunc varius.",
      img: require("./project.3.png"),
    },
    {
      id: 8,
      title: "Project 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui ultrices, nec ultricies nunc varius.",
      img: require("./project.3.png"),
    },
    {
      id: 9,
      title: "Project 9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui ultrices, nec ultricies nunc varius.",
      img: require("./project.3.png"),
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 3;
  const totalPages = 3;

  const handleScroll = (index) => {
    setCurrentIndex(index);
  };

  const getDisplayedProjects = () => {
    const startIndex = currentIndex * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    return projects.slice(startIndex, endIndex);
  };

  const displayedProjects = getDisplayedProjects();

  const getInitials = (name) => {
    const names = name.split(" ");
    return names.length > 1
      ? `${names[0][0]}${names[1][0]}`.toUpperCase()
      : name[0]?.toUpperCase();
  };

  return (
    <section className="projects-main">
      <div className="projects-box">
        <h5>PROJECTS</h5>
        <h2>
          OUR PROJECTS, YOUR IMPACT: <br />
          MAKING A DIFFERENCE TOGETHER
        </h2>
        <p>
          Discover the impact of our initiatives in bridging the educational gap
          and shaping brighter futures. From providing <br />
          essential learning resources to using technology to enhance education,
          to creating equal opportunities for <br />
          underserved communities, see how we’re transforming lives and driving
          meaningful change.
        </p>
        <button className="project-buttons">See More Projects</button>
      </div>

      <div className="project-container">
        {displayedProjects.map((projects) => (
          <div key={projects.id} className="projects-cards">
            <img src={projects.img} className="project-image" />
            <div className="project-info">
              <h4 className="project-title">{projects.title}</h4>
              <p className="project-des">{projects.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cards-controls">
        {/* Always show 3 page buttons */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`button-control ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => handleScroll(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
