import React from 'react';
import projects from '../data/projects.json';
console.log(projects);
const ProjectsList = () => {
    return (
        <div>
            <ul>
            {projects.map((projectsData, index) => { return  
            })}
            </ul>
        </div>

    )
    
}

export default ProjectsList;
