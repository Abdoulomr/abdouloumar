import React from 'react';
import './Projects.css';

const Projects = () => {

    const myProjects = [
        {projectNam: 'Mobyrest', projectLink: '#', projectDescription: 'This is a description meaningless', projectIMG: ''},
        {projectNam: 'Mobyrest', projectLink: '#', projectDescription: 'This is a description meaningless', projectIMG: ''},
        {projectNam: 'Mobyrest', projectLink: '#', projectDescription: 'This is a description meaningless', projectIMG: ''},
        {projectNam: 'Mobyrest', projectLink: '#', projectDescription: 'This is a description meaningless', projectIMG: ''}
    ]

    console.log(myProjects)
    return (
        <div className='projects' id='projects'>
            Prjects
        </div>
    );
};

export default Projects;