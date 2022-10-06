import React from 'react';
import './Projects.css';

const Projects = () => {

    const myProjects = [
        {projectName: 'Mobyresto', projectLink: '#', projectDescription: 'This is a description meaningless', projectIMG: 'mobyresto.png'},
        {projectName: 'Mobyresto', projectLink: '#', projectDescription: 'This is a description meaningless', projectIMG: 'introsection.jpg'},
        {projectName: 'Mobyresto', projectLink: '#', projectDescription: 'This is a description meaningless', projectIMG: 'mobyresto.png'},
        {projectName: 'Mobyresto', projectLink: '#', projectDescription: 'This is a description meaningless', projectIMG: 'introsection.jpg'}
    ]


    return (
        <section className='projects' id='projects'>
            <h1 className='section-title'>Projects & Expriences</h1>

            <div className="projects-wrapper">
                {myProjects.map((project, index) => {
                    return(
                        <div className='project' key={index}>
                            <img className='project-img' src={project.projectIMG} alt={project.projectName} />
                            <h3 className='project-title'>{project.projectName}</h3>
                            <p className='project-description'>{project.projectDescription}</p>
                            <a className='project-link' href={project.projectLink}>View</a>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Projects;