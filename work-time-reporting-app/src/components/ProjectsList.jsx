import React, { useState } from 'react';
import projects from '../data/projects.json';
console.log(projects);
const ProjectsList = (props) => {


    return (
       <div className={2==2 ? "projects-list" : "projects-list__hide"}>
            <div className="projects-list__button">
                <button className="projects-list__button_x">X</button>
                <button className="projects-list__button_ok">Select</button>
            </div>
            <ul className="projects-list__ul">
                {projects.map((project, index) => {
                    return(<li className="projects-list__ul__li" key={project.id}><h4>{project.name}</h4> <h5>{project.id} Client Name: {project.client}</h5></li>)
                })}
            </ul>
        </div>
            

    )
    
}

export default ProjectsList;
