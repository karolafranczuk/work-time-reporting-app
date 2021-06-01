import React from 'react';

import projects from '../data/projects.json';
import { v4 as uuidv4 } from 'uuid';

const SelectedWeekTable = (props) => {
const {projectObj, project, setProject, isProjectSelected, handleDeleteProject, handleSelectProject, handleAddProject, hours, setHours, comment, setComment} = props;
    return (
    <div className="week-table">
            <table className="week-table__table">
                <thead>
                <tr>
                    <th>Project ID</th>
                    <th>Mon (data)</th>
                    <th>Tue (data)</th>
                    <th>Wed (data)</th>
                    <th>Thu (data)</th>
                    <th>Fri (data)</th>
                    <th>Sat (data)</th>
                    <th>Sun (data)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <select 
                        disabled={isProjectSelected} className="week-table__select" name="projects" value={project} onChange={(e) => setProject(e.target.value)}>
                        {projects.map((project, index) => (<option value={project.id} key={uuidv4()}>{project.id}</option>))}
                        </select>
                        <button 
                            disabled={isProjectSelected}
                            className="week-table__button" 
                            onClick={handleSelectProject}>
                            Select project
                        </button>
                        <button 
                            disabled={!isProjectSelected}
                            className="week-table__button" 
                            onClick={handleDeleteProject}>
                            Delete project
                        </button>
                    </td>
                    <td>
                        <input 
                            type="number" 
                            min="0" 
                            max="24" 
                            value={hours.mon} 
                            onChange={(e) =>setHours({...hours, mon: e.target.value})}>
                        </input>
                    </td>
                    <td>
                        <input 
                            type="number" 
                            min="0"
                            max="24"
                            value={hours.tue}
                            onChange={(e) => setHours({...hours, tue: e.target.value})}>
                        </input>
                    </td>
                    <td>
                        <input 
                            type="number" 
                            min="0" 
                            max="24"
                            value={hours.wed}
                            onChange={(e) => setHours({...hours, wed: e.target.value})}>
                        </input>
                    </td>
                    <td>
                        <input 
                            type="number" 
                            min="0" 
                            max="24"
                            value={hours.thu}
                            onChange={(e) => setHours({...hours, thu: e.target.value})}>
                        </input>
                    </td>
                    <td>
                        <input 
                            type="number" 
                            min="0" 
                            max="24"
                            value={hours.fri}
                            onChange={(e) => setHours({...hours, fri: e.target.value})}>
                        </input>
                    </td>
                    <td>
                        <input 
                            type="number" 
                            min="0" 
                            max="24"
                            value={hours.sat}
                            onChange={(e) => setHours({...hours, sat: e.target.value})}>
                        </input>
                    </td>
                    <td>
                        <input 
                            type="number" 
                            min="0" 
                            max="24"
                            value={hours.sun}
                            onChange={(e) => setHours({...hours, sun: e.target.value})}>
                        </input>
                    </td>
                </tr>
                <tr>
                    <td className="week-table__table__header">Project ID</td>
                    <td colSpan="3">{projectObj.id}</td>
                    <td className="week-table__table__header">Client</td>
                    <td colSpan="3">{projectObj.client}</td>
                </tr>
                <tr>
                    <td className="week-table__table__header">Name/Description</td>
                    <td colSpan="7">{projectObj.name}</td>
                </tr>
                <tr>
                    <td className="week-table__table__header">Comment</td>
                    <td colSpan="7" >
                        <textarea 
                            value={comment} 
                            onChange={(e) => setComment(e.target.value)}/>
                    </td>
                </tr>
                </tbody>
            </table>
            <button 
                className="week_table__add__button"
                onClick={handleAddProject}>
                Add project
            </button>
    </div>  
    )
}

export default SelectedWeekTable;