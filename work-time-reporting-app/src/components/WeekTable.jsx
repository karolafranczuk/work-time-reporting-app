import React, { useState } from 'react';

import EmployeeInfo from './EmployeeInfo';
import SelectedWeekTable from './SelectedWeekTable';
import SummaryWeekTable from './SummaryWeekTable';

import projects from '../data/projects.json';


const WeekTable = () => {

const [project, setProject] = useState('');
const [projectObj, setProjectObj] = useState({"id": "", "name": "", "client": ""})
const [isProjectSelected, setIsProjectSelected] = useState(false);
const [addedProjects, setAddedProjects] = useState([])

const handleSelectProject = (selectedProject) => {
    for (let i = 0; i < projects.length; i++){
        if (projects[i].id === selectedProject) {
            setProjectObj(projects[i]);  
            setIsProjectSelected(true); ;
            } 
        }
}

const handleDeleteProject = () => {
    setProjectObj({"id": "", "name": "", "client": ""});
    setIsProjectSelected(false);
}

const handleAddProject = (projectObj) => {
    console.log("handleAdd")
    const addedProject = {"id": "",
                        "name": "",
                        "client": "",
                        "comment": "",
                        "hours": {
                            "mon": 0,
                            "tue": 0,
                            "wed": 0,
                            "thu": 0,
                            "fri": 0,
                            "sat": 0,
                            "sun": 0
                            }
                        }
        addedProject.id = projectObj.id;
        addedProject.name = projectObj.name;
        addedProject.client = projectObj.client;
        addedProject.comment = "vlvlvlv";
        addedProject.hours.mon = 8;

    setAddedProjects([addedProject, ...addedProjects]);
    console.log(addedProjects);
}


    return (
        <div className="week-table">
            <EmployeeInfo />
            <div className="content">
                <SelectedWeekTable
                    project={project}
                    setProject={setProject}
                    projectObj={projectObj}
                    isProjectSelected={isProjectSelected}
                    handleSelectProject={() => handleSelectProject(project)}
                    handleDeleteProject={() => handleDeleteProject()}
                    handleAddProject={() => handleAddProject(projectObj)}
                /> 
                <SummaryWeekTable
                    addedProjects={addedProjects}
                />       
            </div>
        </div>
    )
}

export default WeekTable;