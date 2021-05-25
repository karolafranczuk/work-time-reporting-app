import React from 'react';
import projects from '../data/projects.json';
console.log(projects);
const ProjectsList = () => {
    return (
        <div className="projects-list">
            <ul className="projects-list__ul">
                {projects.map((project, index) => {
                    return(<li key={project.id}>{project.id}</li>)
                })}
            </ul>
        </div>

    )
    
}

export default ProjectsList;
