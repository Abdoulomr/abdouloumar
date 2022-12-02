import React from "react";
import "./Projects.css";
import ReactTooltip from "react-tooltip";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const myProjects = [
    {
      projectName: "Mobyresto",
      projectLink: "https://mobyresto.com/home",
      projectDescription: "Mobyresto marketplace",
      projectIMG: "mobyresto.png",
      gitRepo: "#",
    },
    {
      projectName: "Adviser app",
      projectLink: "https://an-advice.netlify.app/",
      projectDescription: "An adviser app - Frontent Mentor challenge",
      projectIMG: "an-avdice.jpg",
      gitRepo: "https://github.com/Abdoulomr/advice-generator",
    },
    {
      projectName: "Landing page",
      projectLink: "https://intro-drop-down.netlify.app/",
      projectDescription: "Landing page - Frontent Mentor challenge",
      projectIMG: "introsection.jpg",
      gitRepo:
        "https://github.com/Abdoulomr/intro-section-with-dropdown-navigation-main",
    },
    {
      projectName: "Marvel quiz",
      projectLink: "#",
      projectDescription: "React project for practice",
      projectIMG: "marvel-quiz.png",
      gitRepo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1 className="section-title">Projects & Expriences</h1>

      <div className="projects-wrapper">
        {myProjects.map((project, index) => {
          return (
            <div className="project" key={index}>
              <img
                className="project-img"
                src={project.projectIMG}
                alt={project.projectName}
              />
              <div className="detail">
                <h3 className="project-title">{project.projectName}</h3>
                <p className="project-description">
                  {project.projectDescription}
                </p>
                <div className="project-links">
                  <a
                    className="project-link"
                    target="_blank"
                    href={project.projectLink}
                    rel="noreferrer noopener"
                    data-tip="Visit"
                  >
                    <AiOutlineLink />
                  </a>
                  <ReactTooltip
                    place="bottom"
                    effect="solid"
                    padding="5px"
                    backgroundColor="#5207cc"
                    className="tooltip"
                  />

                  <a
                    className="project-link"
                    target="_blank"
                    href={project.gitRepo}
                    data-tip="Github Repo"
                    rel="noreferrer noopener"
                  >
                    <AiFillGithub />
                  </a>
                  <ReactTooltip
                    place="bottom"
                    effect="solid"
                    padding="5px"
                    backgroundColor="#5207cc"
                    className="tooltip"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
