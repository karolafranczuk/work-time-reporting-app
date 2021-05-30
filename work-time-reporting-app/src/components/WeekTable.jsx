import React, { useState } from 'react';

import EmployeeInfo from './EmployeeInfo';
import SelectedWeekTable2 from './SelectedWeekTable';
import SummaryWeekTable from './SummaryWeekTable';

import projects from '../data/projects.json';


const WeekTable = () => {

const [project, setProject] = useState('');
const [projectObj, setProjectObj] = useState({"id": "", "name": "", "client": ""})
const [isProjectSelected, setIsProjectSelected] = useState(false);
const [addedProjects, setAddedProjects] = useState([{}])

const handleSelectProject = (selectedProject) => {
    for (let i = 0; i < projects.length; i++){
        if (projects[i].id === selectedProject) {
            setProjectObj(projects[i]);  
            setIsProjectSelected(true); 
            console.log(projectObj, isProjectSelected);
            } 
        }
}

const handleDeleteProject = () => {
    setProjectObj({"id": "", "name": "", "client": ""});
    setIsProjectSelected(false);
}

const handleAddProject = (project) => {
    setAddedProjects(project, ...addedProjects);
    console.log("blelelee");
}


    return (
        <div className="week-table">
            <EmployeeInfo />
            <div className="content">
                <SelectedWeekTable2
                    isProjectSelected={isProjectSelected}
                    handleSelectProject={() => handleSelectProject(project)}
                    handleDeleteProject={() => handleDeleteProject()}
                    handleAddProject={() => handleAddProject(project)}
                /> 
                <SummaryWeekTable
                    addedProjects={addedProjects}
                />       
            </div>
        </div>
    )
}

export default WeekTable;