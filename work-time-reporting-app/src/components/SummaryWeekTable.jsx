import { render } from '@testing-library/react';
import React from 'react';

const SummaryWeekTable = (props) => {
   const {addedProjects} = props;
   return (
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
    {addedProjects.map(((addedProject, index) => <tr key={addedProject.id}>
        <td>{addedProject.id}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>))} 
    </thead>
    </table>
</div>
)
}

export default SummaryWeekTable;