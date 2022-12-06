import React from "react";
import "./Projects.css";
import ReactTooltip from "react-tooltip";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const Projects = () => {
  const myProjects = [
    {
      projectName: "Mobyresto",
      projectLink: "https://mobyresto.com/home",
      projectDescription: "Mobyresto marketplace",
      projectIMG: "mobyresto.jpg",
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
      projectName: "Todo App",
      projectLink: "https://abdoulstodo.netlify.app/",
      projectDescription: "Todo app made with React",
      projectIMG: "todo.png",
      gitRepo: "https://github.com/Abdoulomr/Abdouls-Todo-App",
    },
  ];

  return (
    <section className="projects" id="projects">
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Projects & Expriences
      </motion.h1>

      <div className="projects-wrapper">
        {myProjects.map((project, index) => {
          return (
            <motion.div
              className="project"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
