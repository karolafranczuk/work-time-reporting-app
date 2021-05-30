import React, { useState } from 'react';

const ProjectsList2 = (props) => {
 
const {projects, handleSelectProject} = props;
   console.log(props)
return (
       <div className="projects-list">
            <div className="projects-list__button">
                <button className="projects-list__button_x">X</button>
                <button className="projects-list__button_ok">Select</button>
            </div>
            <ul className="projects-list__ul">
                {projects.map((project, index) => (
                <li className="projects-list__ul__li" key={project.id} onClick={()=> handleSelectProject}><h4>{project.name}</h4> <h5>{project.id} Client Name: {project.client}</h5>
                </li>)
            )}
            </ul>
        </div>
            

    )
    
}

export default ProjectsList2;