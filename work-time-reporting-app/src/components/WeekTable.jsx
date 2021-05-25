import React, { useState } from 'react';
import useProjectsData from '../hooks/useProjectsData';
import ProjectsList from './ProjectsList';

const WeekTable = () => {
    const {projects, fetchProjectsList} = useProjectsData();
    return (
        <>
        <div className="week-table">
            <div className="week-table__employee__info">
                <span className="week-table_employee_info_header">P00001</span>, <span>Karolina Franczuk</span>
                <br></br>
                <span className="week-table_employee_info_header">Position:</span> <span>Developer</span>
                <br></br>
                <span className="week-table_employee_info_header">Week:</span> <span>MAY 22 2021</span>
                <br></br>
                <span className="week-table_employee_info_header">Expected hours:</span> <span>40.0</span>
                <br></br>
            </div>
            <div className="week-table__table">
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
                    <td><button onClick={() => fetchProjectsList()}>Select project</button></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                    <td><input type="number" min="0" max="24"></input></td>
                </tr>
                <tr>
                    <td>Name/Description</td>
                    <td colSpan="7"><textarea/></td>
                </tr>
                <tr>
                    <td>Comment</td>
                    <td colSpan="7"><textarea/></td>
                </tr>
                </tbody>
            </table>

            <button>Add project</button>
            </div>
            <div className="week-table__summary">
                <table>
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
                    <th>Summary</th>
                </tr> 
                </thead>
                </table>
            </div>
        </div>
        <ProjectsList />
    </>
    )
}

export default WeekTable;