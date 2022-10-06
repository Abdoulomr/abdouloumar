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
                {myProjects.map(project => {
                    return(
                        <div className='project'>
                            <img className='project-img' src={project.projectIMG} alt={project.projectName} />
                            <h3>{project.projectName}</h3>
                            <p>{project.projectDescription}</p>
                            <a href={project.projectLink}>View</a>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Projects;