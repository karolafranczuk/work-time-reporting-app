import { render } from '@testing-library/react';
import React from 'react';

const SummaryWeekTable = (props) => {
   const {addedProjects} = props;
   return (
   <div className="week-table__summary">
    <table>
    <thead>
    <tr>
        <th>Project Information</th>
        <th>Comment</th>
        <th>Mon (data)</th>
        <th>Tue (data)</th>
        <th>Wed (data)</th>
        <th>Thu (data)</th>
        <th>Fri (data)</th>
        <th>Sat (data)</th>
        <th>Sun (data)</th>
        <th>Summary</th>
    </tr>
    {addedProjects.length > 0 && addedProjects.map(((addedProject, index) => <tr key={addedProject.id}>
        <td>{`${addedProject.name} (${addedProject.id})`}<br></br>
            {`${addedProject.client}`}</td>
        <td>{addedProject.comment}</td>
        <td>{addedProject.hours.mon}</td>
        <td>{addedProject.hours.tue}</td>
        <td>{addedProject.hours.wed}</td>
        <td>{addedProject.hours.thu}</td>
        <td>{addedProject.hours.fri}</td>
        <td>{addedProject.hours.sat}</td>
        <td>{addedProject.hours.sun}</td>
        <td></td>
    </tr>))} 
    </thead>
    </table>
</div>
)
}

export default SummaryWeekTable;