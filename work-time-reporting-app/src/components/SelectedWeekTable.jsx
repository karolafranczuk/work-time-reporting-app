import React, { useState } from 'react';
import ProjectsList from './ProjectsList';
import projects from '../data/projects.json';

const SelectedWeekTable = () => {
 
const [project, setProject] = useState('');


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
                        <select name="projects" value={project} onChange={(e) => setProject(e.target.value)}>
                        {projects.map((project, index) => (<option value={project.id} key={project.id}>{project.id}</option>))}
                        </select>
                        <button 
                            className="week-table__button">
                            Select project
                        </button>
                    </td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                </tr>
                <tr>
                    <td className="week-table__table__header">Project ID</td>
                    <td colSpan="3"><textarea/></td>
                    <td className="week-table__table__header">Client</td>
                    <td colSpan="3"><textarea/></td>
                </tr>
                <tr>
                    <td className="week-table__table__header">Name/Description</td>
                    <td colSpan="7"><textarea/></td>
                </tr>
                <tr>
                    <td className="week-table__table__header">Comment</td>
                    <td colSpan="7"><textarea/></td>
                </tr>
                </tbody>
            </table>
            <button className="week_table__add__button">Add project</button>
    </div>  
    )
}

export default SelectedWeekTable;