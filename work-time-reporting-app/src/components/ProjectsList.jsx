import React, { useState } from 'react';
import projects from '../data/projects.json';
console.log(projects);
const ProjectsList = (props) => {
console.log(props);
    return (
       <div className="projects-list">
            <div className="projects-list__button">
                <button className="projects-list__button_x">X</button>
                <button className="projects-list__button_ok">Select</button>
            </div>
            <ul className="projects-list__ul">
                {projects.map((project, index) => (
                <li className="projects-list__ul__li" key={project.id} onClick={()=> console.log("klik mik li", index)}><h4>{project.name}</h4> <h5>{project.id} Client Name: {project.client}</h5><button onClick={()=> console.log("klik mik")}>Select</button>
                </li>)
            )}
            </ul>
        </div>
            

    )
    
}

export default ProjectsList;
